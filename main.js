import data from "./data.json";

class BarChart {
  /**
   * Bar Chart
   * @param {Array<{ day: String, amount: Number }>} data
   */
  constructor(data) {
    this.data = data;
  }

  max() {
    return Math.max(...this.data.map((i) => i.amount));
  }

  total() {
    return this.data.reduce((acc, obj) => acc + obj.amount, 0);
  }

  findHeight(amount) {
    return Math.floor((amount / this.max()) * 100);
  }

  isToday(index) {
    let dayIndex = new Date().getDay() - 1; // mon - sun: 0 - 6

    // if today is sunday, then dayIndex will be -1
    // so we need to check if index is 6 (sunday)
    if (dayIndex === -1) return index === 6;

    return index === dayIndex;
  }

  render() {
    let result = "";

    for (let i = 0; i < this.data.length; i++) {
      const { amount, day: label } = this.data[i];

      result += `<div 
            class="spending-chart__bar ${this.isToday(i) ? "active" : ""}"
            data-label="${label}" 
            data-amount="$${amount}" 
            style="--height: ${this.findHeight(amount)}%"
            tabindex="0">
            <p class="sr-only">
              ${this.isToday(i) ? "today" : label} - $${amount}
            </p>
          </div>`;
    }

    return result;
  }
}

window.addEventListener("DOMContentLoaded", () => {
  const barsContainerElem = document.getElementById("spending-chart");

  const barChart = new BarChart(data);

  barsContainerElem.innerHTML = barChart.render();
});
