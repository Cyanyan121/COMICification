# COMICification

## Introduction

This project combines some image processing techniques to create interesting ‘1980s comic book’ style images.

The input to the system is an ordinary photo and the output is a comic-style image of that photo.
<div align="center">
<img src="./display_images/sourseToResult.png" alt="the process 1" width="600" />
</div>

## The COMICification Process
<div align="center">
<img src="./display_images/the process 1.png" alt="the process 1"  />

<img src="./display_images/the process 2.png" alt="the process 2" width="600" />
</div>
## The Image Processing Techniques

<img src="./display_images/The Process Flow.png" alt="the process 2" style="zoom: 45%;" />

- Top layer – outlines
  - Canny edge detection
- Middle layer – shades
  - Ordered dithering
- Bottom layer – colour
  - Mapping colours to a comic colour palette

