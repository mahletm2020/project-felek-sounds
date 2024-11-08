<template>
  <div class="full-page-background">
    <div class="container">
      <div class="grid-container">

        <!-- Top Row Layout -->
        <div class="gridebig">
          <img src="/images/s1.jpg" alt="Item 1" class="grid-image">
          <div class="arrow-overlay"></div>
        </div>

        <!-- Middle Column: Two small items stacked in a column -->
        <div class="middle-small-items-column">
          <div class="grid-item-small" style="background-image: url('/images/s1.jpg');">
            <div class="label">KEFETA VOL. 1.<br />THE SERUM PRESETS</div>
            <div class="arrow-overlay"></div>
          </div>
          <div class="grid-item-small" style="background-image: url('/images/s4.jpg');">
            <div class="label">KEFETA VOL. 1.<br />THE SERUM PRESETS</div>
            <div class="arrow-overlay"></div>
          </div>
        </div>

        <div class="gridebig">
          <img src="/images/s3.jpg" alt="Item 3" class="grid-image">
          <div class="arrow-overlay"></div>
        </div>

        <!-- Spacer Row for horizontal spacing between top and bottom rows -->
        <div class="spacer-row"></div>

        <!-- Bottom Row Layout -->
        <div class="gridebig">
          <img src="/images/s2.jpg" alt="Item 4" class="grid-image">
          <div class="arrow-overlay"></div>
        </div>

        <!-- Middle Column: Two small items stacked in a column for VOL. 2 -->
        <div class="middle-small-items-column">
          <div class="grid-item-small" style="background-image: url('/images/s4.jpg');">
            <div class="label">KEFETA VOL. 2.<br />THE SERUM PRESETS</div>
            <div class="arrow-overlay"></div>
          </div>
          <div class="grid-item-small no-border" style="background-image: url('/images/s5.jpg');">
            <div class="label">KEFETA VOL. 2.<br />THE SERUM PRESETS</div>
          </div>
        </div>

        <div class="gridebig blurred no-border">
          <div class="arrow-overlay"></div>
        </div>

      </div>
    </div>
  </div>
</template>

<style scoped>
/* Full-page background */
.full-page-background {
  /* background-image: url('/images/dude2.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat; */
  height: 400vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

/* Main container for the grid */
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 20px;
  margin-top: -12px;
}

/* Grid container styling */
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);  /* 3 equal columns */
  grid-auto-rows: auto;  /* Rows auto-adjust to content */
  gap: 10px;
  width: 90vw;
  max-width: 1200px;
  padding: 20px;
}

/* Spacer row to add vertical space between rows */
.spacer-row {
  grid-column: 1 / span 3;
  height: 20px;
}

/* Base grid item styling */
.grid-item {
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;
}

/* Large grid item styling */
.gridebig {
  grid-column: span 1;  /* Occupies one column */
  grid-row: span 2;     /* Spans two rows to match the height of two small items */
  height: 640px;        /* Adjust height to match two small items (150px each) */
  width: 500px;
  border-right: 4px solid orange;  /* Right border in orange */
  border-bottom: 4px solid orange; /* Bottom border in orange */
  border-bottom-right-radius: 10px; /* Slight curve on the bottom-right corner */
}

/* Small grid item styling with background image support */
.grid-item-small {
  border: 2px solid #c0d4a3;  /* Border color of the small grid */
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 300px;  /* Height of each small item */
  width: 200px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.grid-item:hover {
  transform: scale(1.05);
}

/* Special styling for items without borders */
.no-border {
  border: none;
}

/* Blurred item */
.blurred {
  background-color: #333;
  filter: blur(0.9px);
}

/* Image styling */
.grid-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Label styling for text items */
.label {
  color: black;
  font-size: 0.9rem;
  font-weight: bold;
  text-align: center;
  padding: 10px;
  background-color: #c0d4a3;
  border-radius: 5px;
}

/* Arrow overlay */
.arrow-overlay {
  position: absolute;
  bottom: 10px;
  right: 10px;
  width: 30px;
  height: 30px;
  background-color: orange;
  mask: url('/icons/downarrow.svg') center / contain no-repeat;
  -webkit-mask: url('/icons/downarrow.svg') center / contain no-repeat;
  transition: transform 0.3s ease;
}

.grid-item:hover .arrow-overlay {
  transform: translate(5px, -5px);
}
.middle-small-items-column{
  gap: 10px;
}

/* Responsive design adjustments */
@media (max-width: 768px) {
  .grid-container {
    grid-template-columns: 1fr; /* Single column layout on small screens */
    gap: 15px;
  }

  /* Stack large grids first, followed by small grids in a row */
  .gridebig {
    width: 100%;
    height: 300px;
  }

  /* Center the small items in a row */
  .middle-small-items-column {
    display: flex;
    gap: 10px;
  }

  .grid-item-small {
    width: 45%;
  }
}

@media (max-width: 480px) {
  .grid-container {
    grid-template-columns: 1fr; /* Stack all items in a single column on very small screens */
  }

  /* Full width for small items */
  .grid-item-small {
    width: 100%;
  }
}

</style>
