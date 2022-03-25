for file in *.jpg
do
  magick "$file" "${file%.*}.webp"
done
