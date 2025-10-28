#!/usr/bin/env python3
"""
Generate Favicon for Archis Studio Blog
Theme: Autumn Noir Future (Fashion + Gaming + AI + Space)
"""

from PIL import Image, ImageDraw, ImageFont
import os

# Design: "A" with pixel art style + future tech accent
# Color: Autumn Noir (warm dark tones)

def create_favicon():
    # Create 64x64 canvas (will generate multiple sizes)
    sizes = [64, 32, 16]
    
    for size in sizes:
        # Create image with transparent background
        img = Image.new('RGBA', (size, size), (0, 0, 0, 0))
        draw = ImageDraw.Draw(img)
        
        # Autumn Noir colors
        bg_color = (20, 20, 25, 255)      # Deep noir black
        accent_color = (198, 134, 88, 255) # Autumn warm orange
        highlight = (139, 92, 246, 255)    # Future purple accent
        
        # Background - rounded square
        margin = max(2, size // 16)
        draw.rounded_rectangle(
            [(margin, margin), (size - margin, size - margin)],
            radius=max(3, size // 8),
            fill=bg_color
        )
        
        # Draw stylized "A" letterform
        if size >= 32:
            # Larger version - more detail
            center_x = size // 2
            center_y = size // 2
            
            # "A" shape with pixel art style
            bar_width = max(2, size // 10)
            
            # Left diagonal
            points_left = [
                (center_x - size//4, size - margin - 2),
                (center_x - bar_width//2, margin + 4),
                (center_x + bar_width//2, margin + 4),
                (center_x - size//6, size - margin - 2)
            ]
            draw.polygon(points_left, fill=accent_color)
            
            # Right diagonal
            points_right = [
                (center_x + size//6, size - margin - 2),
                (center_x - bar_width//2, margin + 4),
                (center_x + bar_width//2, margin + 4),
                (center_x + size//4, size - margin - 2)
            ]
            draw.polygon(points_right, fill=accent_color)
            
            # Crossbar with future accent
            bar_y = center_y + size//8
            draw.rectangle(
                [(center_x - size//5, bar_y - bar_width//2),
                 (center_x + size//5, bar_y + bar_width//2)],
                fill=highlight
            )
            
        else:
            # Simplified version for 16x16
            center_x = size // 2
            center_y = size // 2
            
            # Simple triangle with bar
            points = [
                (center_x, margin + 2),
                (margin + 2, size - margin - 1),
                (center_x - 1, size - margin - 1),
                (center_x - 1, center_y + 1),
                (center_x + 1, center_y + 1),
                (center_x + 1, size - margin - 1),
                (size - margin - 2, size - margin - 1)
            ]
            draw.polygon(points, fill=accent_color)
            
            # Tiny crossbar
            draw.line(
                [(margin + 3, center_y + 1), (size - margin - 3, center_y + 1)],
                fill=highlight,
                width=1
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
    print('\n✨ Favicon generation complete!')
    print('📁 Files: favicon.ico, favicon-64x64.png, favicon-32x32.png, favicon-16x16.png')

