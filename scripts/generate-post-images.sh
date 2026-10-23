#!/usr/bin/env bash
set -euo pipefail

if [[ $# -eq 0 ]]; then
  echo 'Usage: bash scripts/generate-post-images.sh path/to/source.png [...]' >&2
  exit 1
fi
command -v magick >/dev/null || { echo 'ImageMagick (magick) is required locally.' >&2; exit 1; }

for source in "$@"; do
  [[ -f "$source" ]] || { echo "Missing source: $source" >&2; exit 1; }
  case "$source" in
    *.png|*.jpg|*.jpeg) ;;
    *) echo "Expected an original PNG/JPEG: $source" >&2; exit 1 ;;
  esac
done

for source in "$@"; do
  image_base="${source%.*}"
  output="${image_base}-cover.webp"
  magick "$source" -auto-orient -resize '1280x>' -strip -quality 82 "$output"
  if (( $(wc -c < "$output") >= $(wc -c < "$source") )); then
    rm "$output"
    echo "Keep original (conversion did not reduce bytes): $source"
  else
    magick identify -format '%f: %wx%h, %b\n' "$output"
  fi
done
