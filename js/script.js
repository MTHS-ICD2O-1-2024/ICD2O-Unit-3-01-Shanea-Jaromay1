// Copyright (c) 2020 Shanea Jaromay All rights reserved
//
// Created by: Shanea Jaromay
// Created on: March 2025
// This file contains the JS functions for index.html

"use strict"

/**
 * This function calculates area of a triangle.
 */
function calculateAreaOfTrapezoid () {
  // input
  const aBaseOfTrapezoid = parseInt(document.getElementById('a-base-of-trapezoid').value)
  const bBaseOfTrapezoid = parseFloat(document.getElementById('b-base-of-trapezoid').value)
  const heightOfTrapezoid = parseInt(document.getElementById('height-of-trapezoid').value)

  // process
  const areaOfTrapezoid = [ (aBaseOfTrapezoid + bBaseOfTrapezoid) / 2] * heightOfTrapezoid

  // output
  document.getElementById('area').innerHTML = 'Area is: ' + areaOfTrapezoid + ' cm²'
}

