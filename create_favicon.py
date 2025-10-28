#!/usr/bin/env python3
"""
Generate Favicon for Archis Studio Blog
Theme: Technology & Soul - "A" mark
Blending: Circuit pattern + Rising light + Japanese minimalism
Style: Futuristic Wabi-Sabi
"""

from PIL import Image, ImageDraw
import math

# Design: Abstract "A" - circuit pattern meets rising light
# Style: Futuristic minimalism with Japanese wabi-sabi essence
# Colors: Dark graphite base + cyan/golden glow
# Feeling: Intelligent, calm, visionary

def create_favicon():
    # Create sizes for different contexts
    sizes = [64, 32, 16]
    
    for size in sizes:
        # Transparent background for crisp overlay
        img = Image.new('RGBA', (size, size), (0, 0, 0, 0))
        draw = ImageDraw.Draw(img)
        
        # Futuristic minimalist palette
        dark_graphite = (28, 32, 38, 255)      # Deep tech background
        cyan_glow = (100, 255, 218, 255)       # Bright cyan edge light
        golden_accent = (255, 200, 87, 255)     # Warm golden highlight
        dim_cyan = (100, 255, 218, 180)        # Subtle glow
        dim_gold = (255, 200, 87, 180)         # Subtle warmth
        
        center_x = size // 2
        center_y = size // 2
        margin = max(4, size // 8)
        
        # Design: Abstract "A" mark with circuit + light aesthetic
        # Wabi-sabi: imperfect, evolving, natural-technological harmony
        
        if size >= 32:
            # Base: Solid dark graphite rounded square (tech foundation)
            bg_margin = 2
            draw.rounded_rectangle(
                [(bg_margin, bg_margin), (size - bg_margin, size - bg_margin)],
                radius=max(4, size // 10),
                fill=dark_graphite
            )
            
            # "A" geometry - clean, geometric, rising
            stroke_width = max(2, size // 12)
            
            # Left stroke of "A" - cyan glow (technology)
            left_top = (center_x - size // 6, margin)
            left_bottom = (margin + 6, size - margin - 2)
            left_inner_top = (center_x - size // 6 + stroke_width, margin)
            left_inner_bottom = (margin + 6 + stroke_width, size - margin - 2)
            
            left_points = [left_top, left_bottom, left_inner_bottom, left_inner_top]
            draw.polygon(left_points, fill=cyan_glow)
            
            # Right stroke of "A" - golden glow (soul/light)
            right_top = (center_x + size // 6, margin)
            right_bottom = (size - margin - 6, size - margin - 2)
            right_inner_top = (center_x + size // 6 - stroke_width, margin)
            right_inner_bottom = (size - margin - 6 - stroke_width, size - margin - 2)
            
            right_points = [right_top, right_bottom, right_inner_bottom, right_inner_top]
            draw.polygon(right_points, fill=golden_accent)
            
            # Crossbar - circuit pattern detail (blended color)
            bar_y = center_y + size // 10
            bar_height = stroke_width - 1
            
            # Main crossbar with subtle gradient effect (cyan to gold)
            draw.rectangle(
                [(margin + 10, bar_y - bar_height // 2),
                 (size - margin - 10, bar_y + bar_height // 2)],
                fill=dim_cyan
            )
            
            # Circuit-like nodes at crossbar ends (wabi-sabi detail)
            node_size = max(1, stroke_width // 2)
            # Left node - cyan
            draw.ellipse(
                [(margin + 10 - node_size, bar_y - node_size),
                 (margin + 10 + node_size, bar_y + node_size)],
                fill=cyan_glow
            )
            # Right node - golden
            draw.ellipse(
                [(size - margin - 10 - node_size, bar_y - node_size),
                 (size - margin - 10 + node_size, bar_y + node_size)],
                fill=golden_accent
            )
            
            # Top apex - rising light point (golden)
            apex_size = max(2, stroke_width)
            draw.ellipse(
                [(center_x - apex_size, margin - apex_size // 2),
                 (center_x + apex_size, margin + apex_size * 1.5)],
                fill=golden_accent
            )
            
        else:
            # Simplified 16x16 version - minimal "A" mark
            # Dark background
            draw.rounded_rectangle(
                [(1, 1), (size - 1, size - 1)],
                radius=2,
                fill=dark_graphite
            )
            
            # Simple "A" triangle shape
            # Left stroke - cyan
            left_points = [
                (center_x - 1, 3),
                (3, size - 3),
                (5, size - 3),
                (center_x, 5)
            ]
            draw.polygon(left_points, fill=cyan_glow)
            
            # Right stroke - golden
            right_points = [
                (center_x + 1, 3),
                (size - 3, size - 3),
                (size - 5, size - 3),
                (center_x, 5)
            ]
            draw.polygon(right_points, fill=golden_accent)
            
            # Tiny crossbar
            draw.rectangle(
                [(5, center_y), (size - 5, center_y + 1)],
                fill=dim_cyan
            )
        
        # Save favicon
        filename = f'favicon-{size}x{size}.png'
        img.save(filename, 'PNG')
        print(f'✓ Created {filename}')
        
        # Also save as favicon.ico for 32x32
        if size == 32:
            img.save('favicon.ico', format='ICO', sizes=[(32, 32)])
            print(f'✓ Created favicon.ico')

if __name__ == '__main__':
    create_favicon()
    print('\n✨ Futuristic Favicon generation complete!')
    print('🔮 Theme: Technology & Soul - "A" Circuit + Light')
    print('🎨 Style: Futuristic Wabi-Sabi Minimalism')
    print('💠 Colors: Graphite + Cyan Glow + Golden Light')
    print('📁 Files: favicon.ico, favicon-64x64.png, favicon-32x32.png, favicon-16x16.png')
    print('✨ Feeling: Intelligent, Calm, Visionary')

