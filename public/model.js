const model = (function () => {
  const maze = createGrid(settings);

  return {
    get: (args_dimensions) => {
      let value;

      // iterativly locate value by specifying it's array at each dimension level
      for (let i = 0; i < arguments.length; i++) {
        value = value[arguments[i]]
      }

      return value;
    }
  };

  // Constructors
  function createMaze(settings) {
    return createGrid(settings.DIMENSION_SIZES, settings.DIMENSIONS_SIZES.length);

    //
    // recursively generates an N-dimensional matrix
    function createGrid(d_maxes, dimension) {
      const grid = [];

      if (dimension == 0) {
        return settings.DEFAULT_VALUE;
      }
      else {
        for (let i = 0; i < d)maxes.length; i++) {
          grid.push(createGrid(d_maxes, dimension - 1));
        }
      }

      return grid;
    }
    for (let l = 0; l < settings.dimentions[dim]; l++) {
      grid.push(createGrid(settings, dim - 1));
    }

    for (let d = 0; d < settings.DIMENSIONS, d++) {
      for (let i = 0; i < settings.X_DIM; i++) {

      }
    }
  }
})(settings);
