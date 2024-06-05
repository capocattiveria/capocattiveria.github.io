---
title: "Debounce a button with esp32"
date: 2024-06-05T10:41:26+02:00
author: "Nico Fiorini"
# categories: 
#   - embedded 
tags: 
  - All
  - Embedded 
  - esp32 
  - Programming 

draft: false
showToc: true
---

Debouncing a button is a common issue for the effective operation of a button. The physical imperfections of the button lead to voltage bounces when the button is pressed, resulting in a voltage signal that bounces just like the following figure:

{{< figure src="/images/embedded/1_debounce.jpg" title="Voltage Bouncing" align=center height="200px" >}}

I tackled this issue with Arduino some time ago ([pomodoro timer with arduino (ita)](../Tech/03_pomodoro_timer.md)), but recently I've started experimenting a bit with the ESP32 board and revisited the problem using this framework and programming language C++.

To get started with this board and become familiar with the APIs provided by the framework (esp-idf), I implemented a simple firmware that reads the state change of a button, turning a LED on and off.

## Requirements

- esp-idf framework installed ([Get started with esp32](https://docs.espressif.com/projects/esp-idf/en/stable/esp32/get-started/index.html), I use VsCode with esp-idf extension)
- esp32 with usb cable
- Breadboard and some wires
- Led
- Resistor 220\\(\Omega\\)
- Button

## Schematics

{{< figure src="/images/embedded/1_debounce_schematics.png" title="Schematics" align=center height="200px" >}}

## Firmware Development

You can find my code in my repository, in the folder debouncing_button.
