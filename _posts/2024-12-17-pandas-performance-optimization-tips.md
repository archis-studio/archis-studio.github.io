---
title: "Pandas 效能調校：讓你的資料分析飛起來！"
date: 2025-09-27 19:32:37 +0800  # 實際建立時間
last_modified_at: 2025-09-28 18:04:54 +0800  # 最後修改時間（加入排序功能）
categories: [technical]
tags: [Python, Pandas, 效能優化, 資料分析, DataFrame, 資料科學, 最佳實務]
header:
  overlay_color: "#3498db"
  overlay_filter: "0.5"
  overlay_image: /assets/images/pandas-optimization-header.jpg
  teaser: /assets/images/pandas-optimization-teaser.jpg
excerpt: "是不是常常等 Pandas 跑資料跑到懷疑人生？🐌 今天來分享幾個實戰技巧，讓你的 DataFrame 操作速度提升 10 倍！"
toc: true
toc_sticky: true
---

前幾天同事跑來問我：「為什麼我的 Pandas 程式跑了 2 小時還沒結束？」看了一下他的程式碼，我差點笑出來... 😅

其實 Pandas 效能優化就像調音響一樣，知道幾個關鍵的「旋鈕」在哪裡，就能讓它唱出美妙的歌聲！今天就來分享一些我這幾年踩坑累積的優化技巧。

<!--more-->

## 為什麼 Pandas 會這麼慢？ 🤔

首先要了解 Pandas 的「痛點」在哪裡：

### 1. 記憶體使用不當
```python
import pandas as pd
import numpy as np

# 產生測試資料
df = pd.DataFrame({
    'id': range(1000000),
    'value': np.random.randn(1000000)
})

# 檢查記憶體使用
print(df.info(memory_usage='deep'))
```

### 2. 迴圈的陷阱
```python
# ❌ 這樣寫會被同事翻白眼...
total = 0
for idx, row in df.iterrows():  # 超級慢！
    total += row['value']

# ✅ 向量化操作
total = df['value'].sum()  # 快 100 倍！
```

讓我用實際測試來展示差異：

```python
import time

def time_it(func):
    start = time.time()
    result = func()
    end = time.time()
    print(f"執行時間: {end - start:.4f} 秒")
    return result

# 測試資料
df = pd.DataFrame({
    'A': np.random.randn(100000),
    'B': np.random.randn(100000)
})

# 方法 1: 迴圈 (慢到爆)
def loop_method():
    result = []
    for idx, row in df.iterrows():
        result.append(row['A'] + row['B'])
    return result

# 方法 2: 向量化操作 (神速)
def vectorized_method():
    return df['A'] + df['B']

print("迴圈方法:")
time_it(loop_method)        # ~15 秒

print("向量化方法:")
time_it(vectorized_method)  # ~0.001 秒
```

差異有多大？向量化操作可以快上 **15,000 倍**！😱

## 資料類型優化：省記憶體就是省時間 💾

### 選對資料類型

```python
# 建立測試 DataFrame
df = pd.DataFrame({
    'int_col': np.random.randint(0, 100, 1000000),
    'float_col': np.random.randn(1000000),
    'str_col': ['category_' + str(i % 10) for i in range(1000000)]
})

print("原始資料類型:")
print(df.dtypes)
print(f"記憶體使用: {df.memory_usage(deep=True).sum() / 1024**2:.2f} MB")

# 優化資料類型
df_optimized = df.copy()

# int64 -> int8 (如果數值範圍允許)
df_optimized['int_col'] = df_optimized['int_col'].astype('int8')

# float64 -> float32 (通常精度夠用)
df_optimized['float_col'] = df_optimized['float_col'].astype('float32')

# 字串 -> category (重複值很多時超有效)
df_optimized['str_col'] = df_optimized['str_col'].astype('category')

print("\n優化後資料類型:")
print(df_optimized.dtypes)
print(f"記憶體使用: {df_optimized.memory_usage(deep=True).sum() / 1024**2:.2f} MB")
```

結果通常能省下 **50-70%** 的記憶體！

### 自動優化函數

我寫了一個自動優化的函數，超好用的：

```python
def optimize_dtypes(df):
    """自動優化 DataFrame 的資料類型"""
    optimized = df.copy()
    
    for col in df.columns:
        col_type = df[col].dtype
        
        if col_type != 'object':
            c_min = df[col].min()
            c_max = df[col].max()
            
            if str(col_type)[:3] == 'int':
                # 整數型優化
                if c_min > np.iinfo(np.int8).min and c_max < np.iinfo(np.int8).max:
                    optimized[col] = df[col].astype(np.int8)
                elif c_min > np.iinfo(np.int16).min and c_max < np.iinfo(np.int16).max:
                    optimized[col] = df[col].astype(np.int16)
                elif c_min > np.iinfo(np.int32).min and c_max < np.iinfo(np.int32).max:
                    optimized[col] = df[col].astype(np.int32)
                    
            elif str(col_type)[:5] == 'float':
                # 浮點數優化
                if c_min > np.finfo(np.float32).min and c_max < np.finfo(np.float32).max:
                    optimized[col] = df[col].astype(np.float32)
        else:
            # 字串類型優化
            num_unique_values = len(df[col].unique())
            num_total_values = len(df[col])
            if num_unique_values / num_total_values < 0.5:  # 重複率超過 50%
                optimized[col] = df[col].astype('category')
    
    return optimized

# 使用範例
df_auto_optimized = optimize_dtypes(df)
```

## 讀取資料的優化技巧 📂

### CSV 讀取優化

```python
# ❌ 慢速讀取
df_slow = pd.read_csv('large_file.csv')

# ✅ 優化讀取
df_fast = pd.read_csv(
    'large_file.csv',
    dtype={'user_id': 'int32', 'category': 'category'},  # 預先指定型別
    parse_dates=['timestamp'],  # 指定日期欄位
    nrows=10000,  # 先讀一部分測試
    chunksize=10000,  # 分批讀取
    low_memory=False,  # 避免混合型別推斷
    engine='c'  # 使用 C 引擎 (預設)
)
```

### 分批處理大檔案

```python
def process_large_csv(filename, chunk_size=10000):
    """分批處理大型 CSV 檔案"""
    results = []
    
    for chunk in pd.read_csv(filename, chunksize=chunk_size):
        # 對每個 chunk 進行處理
        processed_chunk = chunk.groupby('category').sum()
        results.append(processed_chunk)
    
    # 合併所有結果
    final_result = pd.concat(results).groupby(level=0).sum()
    return final_result

# 使用範例
result = process_large_csv('huge_sales_data.csv')
```

## 向量化操作：拒絕迴圈的誘惑 🚀

### apply() vs 向量化操作

```python
# 測試資料
df = pd.DataFrame({
    'A': np.random.randn(100000),
    'B': np.random.randn(100000),
    'C': np.random.choice(['X', 'Y', 'Z'], 100000)
})

# ❌ 使用 apply (較慢)
def slow_calculation(row):
    if row['C'] == 'X':
        return row['A'] + row['B']
    elif row['C'] == 'Y': 
        return row['A'] - row['B']
    else:
        return row['A'] * row['B']

df['result_slow'] = df.apply(slow_calculation, axis=1)

# ✅ 向量化操作 (超快)
conditions = [
    df['C'] == 'X',
    df['C'] == 'Y',
    df['C'] == 'Z'
]

choices = [
    df['A'] + df['B'],
    df['A'] - df['B'], 
    df['A'] * df['B']
]

df['result_fast'] = np.select(conditions, choices)
```

### 字串操作優化

```python
# ❌ 慢速字串處理
df['processed'] = df['text_col'].apply(lambda x: x.upper().strip())

# ✅ 向量化字串操作
df['processed'] = df['text_col'].str.upper().str.strip()

# 更複雜的例子：提取 email 網域
# ❌ 慢速版本
df['domain'] = df['email'].apply(lambda x: x.split('@')[1] if '@' in x else '')

# ✅ 快速版本
df['domain'] = df['email'].str.split('@').str[1].fillna('')
```

## 群組操作優化 📊

### GroupBy 效能調校

```python
# 測試資料
df = pd.DataFrame({
    'group': np.random.choice(['A', 'B', 'C'], 1000000),
    'value1': np.random.randn(1000000),
    'value2': np.random.randn(1000000),
    'date': pd.date_range('2020-01-01', periods=1000000, freq='1min')
})

# ❌ 慢速群組操作
def slow_groupby():
    result = []
    for group in df['group'].unique():
        subset = df[df['group'] == group]
        agg_result = {
            'group': group,
            'mean_value1': subset['value1'].mean(),
            'sum_value2': subset['value2'].sum()
        }
        result.append(agg_result)
    return pd.DataFrame(result)

# ✅ 快速群組操作
def fast_groupby():
    return df.groupby('group').agg({
        'value1': 'mean',
        'value2': 'sum'
    }).reset_index()

# 效能測試
print("慢速方法:")
time_it(slow_groupby)    # ~2 秒

print("快速方法:")
time_it(fast_groupby)    # ~0.05 秒
```

### 進階 GroupBy 技巧

```python
# 多重聚合操作
agg_functions = {
    'value1': ['mean', 'std', 'min', 'max'],
    'value2': ['sum', 'count'],
    'date': ['min', 'max']
}

result = df.groupby('group').agg(agg_functions)

# 扁平化欄位名稱
result.columns = ['_'.join(col).strip() for col in result.columns]
result = result.reset_index()

print(result.head())
```

## 記憶體管理與監控 📈

### 監控記憶體使用

```python
def memory_usage_check(df, message=""):
    """檢查 DataFrame 記憶體使用"""
    memory_mb = df.memory_usage(deep=True).sum() / 1024**2
    print(f"{message} 記憶體使用: {memory_mb:.2f} MB")
    return memory_mb

# 使用範例
original_memory = memory_usage_check(df, "原始資料")
optimized_memory = memory_usage_check(df_optimized, "優化後")

print(f"節省記憶體: {((original_memory - optimized_memory) / original_memory) * 100:.1f}%")
```

### 即時記憶體清理

```python
import gc

def cleanup_memory():
    """強制垃圾回收"""
    gc.collect()
    
# 在處理大資料時定期清理
for chunk in pd.read_csv('large_file.csv', chunksize=10000):
    # 處理資料
    processed = process_chunk(chunk)
    
    # 清理記憶體
    del chunk
    cleanup_memory()
```

## 平行處理：多核心威力 💪

### 使用 Dask 處理超大資料

```python
import dask.dataframe as dd

# 讀取大型資料集
dask_df = dd.read_csv('massive_file.csv')

# Dask 會自動分割資料到多個核心
result = dask_df.groupby('category').value.mean().compute()

# 比較 Pandas vs Dask
def pandas_process():
    df = pd.read_csv('large_file.csv')  # 可能會 out of memory
    return df.groupby('category').value.mean()

def dask_process():
    df = dd.read_csv('large_file.csv')  # 分批讀取
    return df.groupby('category').value.mean().compute()
```

### 多進程處理

```python
from multiprocessing import Pool
import numpy as np

def process_chunk(chunk):
    """處理單個 chunk 的函數"""
    return chunk.groupby('group').sum()

def parallel_processing(df, num_processes=4):
    """平行處理 DataFrame"""
    
    # 分割資料
    chunks = np.array_split(df, num_processes)
    
    # 使用多進程處理
    with Pool(processes=num_processes) as pool:
        results = pool.map(process_chunk, chunks)
    
    # 合併結果
    final_result = pd.concat(results).groupby(level=0).sum()
    return final_result

# 使用範例
result = parallel_processing(large_df, num_processes=8)
```

## 我的踩坑血淚史 💀

### 1. SettingWithCopyWarning 的陷阱

```python
# ❌ 這樣會有警告，而且可能不會生效
df_subset = df[df['value'] > 0]
df_subset['new_col'] = 'something'  # 警告！

# ✅ 正確的做法
df_subset = df[df['value'] > 0].copy()  # 明確複製
df_subset['new_col'] = 'something'  # OK!

# 或者直接在原 DataFrame 操作
df.loc[df['value'] > 0, 'new_col'] = 'something'
```

### 2. 日期時間處理的坑

```python
# ❌ 字串比較 (超慢)
df['date_str'] = df['date'].astype(str)
result = df[df['date_str'] > '2023-01-01']

# ✅ 直接用 datetime 比較 (超快)
df['date'] = pd.to_datetime(df['date'])
result = df[df['date'] > '2023-01-01']
```

### 3. join vs merge 的選擇

```python
# 當有明確的索引關係時，join 比 merge 快很多
df1 = df1.set_index('key_col')
df2 = df2.set_index('key_col')

# ✅ 使用 join (較快)
result = df1.join(df2, how='inner')

# 而不是 merge (較慢)
# result = pd.merge(df1, df2, on='key_col', how='inner')
```

## 實戰案例：股票資料分析優化 📈

讓我用一個實際例子來展示這些技巧：

```python
def analyze_stock_data_slow(df):
    """未優化版本"""
    results = []
    
    for stock in df['symbol'].unique():
        stock_data = df[df['symbol'] == stock].copy()
        
        # 計算移動平均 (慢)
        ma_5 = []
        ma_20 = []
        for i in range(len(stock_data)):
            if i >= 4:
                ma_5.append(stock_data.iloc[i-4:i+1]['close'].mean())
            else:
                ma_5.append(np.nan)
                
            if i >= 19:
                ma_20.append(stock_data.iloc[i-19:i+1]['close'].mean())
            else:
                ma_20.append(np.nan)
        
        stock_data['ma_5'] = ma_5
        stock_data['ma_20'] = ma_20
        results.append(stock_data)
    
    return pd.concat(results)

def analyze_stock_data_fast(df):
    """優化版本"""
    # 使用向量化操作計算移動平均
    df = df.sort_values(['symbol', 'date'])
    df['ma_5'] = df.groupby('symbol')['close'].rolling(5).mean().values
    df['ma_20'] = df.groupby('symbol')['close'].rolling(20).mean().values
    
    return df

# 效能比較
stock_df = pd.DataFrame({
    'symbol': np.random.choice(['AAPL', 'GOOGL', 'MSFT'], 10000),
    'date': pd.date_range('2020-01-01', periods=10000),
    'close': np.random.randn(10000) * 100 + 1000
})

print("未優化版本:")
time_it(lambda: analyze_stock_data_slow(stock_df))  # ~15 秒

print("優化版本:")
time_it(lambda: analyze_stock_data_fast(stock_df))   # ~0.1 秒
```

## 效能監控與 Profiling 🔍

### 使用 cProfile 找瓶頸

```python
import cProfile
import pstats

def profile_pandas_code():
    """要分析的 Pandas 程式碼"""
    df = pd.DataFrame(np.random.randn(100000, 10))
    result = df.groupby(df.index % 1000).sum()
    return result

# 效能分析
cProfile.run('profile_pandas_code()', 'pandas_profile.prof')

# 查看結果
stats = pstats.Stats('pandas_profile.prof')
stats.sort_stats('cumulative').print_stats(10)
```

### 使用 line_profiler 逐行分析

```bash
# 安裝 line_profiler
pip install line_profiler
```

```python
@profile  # 需要 line_profiler
def detailed_analysis(df):
    # 每一行都會被分析
    grouped = df.groupby('category')  # 這行花多少時間？
    result = grouped.sum()            # 這行花多少時間？ 
    return result
```

## 總結與最佳實務 🎯

根據我的經驗，Pandas 效能優化的黃金法則：

### 1. 優先順序
1. **資料類型優化** - 投資報酬率最高
2. **向量化操作** - 避免迴圈
3. **分批處理** - 控制記憶體使用
4. **平行處理** - 善用多核心

### 2. 開發習慣
- ✅ 總是先用小資料集測試
- ✅ 定期檢查記憶體使用
- ✅ 使用 `.copy()` 避免 SettingWithCopyWarning
- ✅ 優先考慮向量化操作

### 3. 效能檢查清單

```python
def performance_checklist(df):
    """Pandas 效能檢查清單"""
    
    print("🔍 Pandas 效能檢查報告")
    print("=" * 40)
    
    # 1. 資料類型檢查
    print("\n1. 資料類型分析:")
    memory_usage = df.memory_usage(deep=True).sum() / 1024**2
    print(f"   總記憶體使用: {memory_usage:.2f} MB")
    
    object_cols = df.select_dtypes(include=['object']).columns
    if len(object_cols) > 0:
        print(f"   ⚠️  發現 {len(object_cols)} 個 object 欄位，考慮轉換為 category")
    
    # 2. 重複值檢查
    print("\n2. 重複值分析:")
    for col in df.columns:
        unique_ratio = df[col].nunique() / len(df)
        if unique_ratio < 0.5 and df[col].dtype == 'object':
            print(f"   💡 {col}: 重複率 {(1-unique_ratio)*100:.1f}%，建議轉為 category")
    
    # 3. 空值檢查
    print("\n3. 空值分析:")
    null_cols = df.isnull().sum()
    for col, null_count in null_cols[null_cols > 0].items():
        print(f"   📊 {col}: {null_count} 個空值 ({null_count/len(df)*100:.1f}%)")

# 使用範例
performance_checklist(df)
```

記住，**效能優化是一門平衡的藝術**。不要為了微小的效能提升而犧牲程式碼的可讀性。先讓程式跑起來，再讓程式跑得快！

---

## 延伸閱讀 📚

- 📖 [Pandas Documentation - Performance](https://pandas.pydata.org/docs/user_guide/enhancingperf.html)
- 🎥 [Python Data Science Handbook](https://jakevdp.github.io/PythonDataScienceHandbook/)
- 💻 [Dask Documentation](https://docs.dask.org/en/stable/)

下次來聊聊 NumPy 的效能優化技巧，那個更是深不見底的坑 😂

有任何問題歡迎留言討論！讓我們一起讓 Pandas 飛起來 🚀