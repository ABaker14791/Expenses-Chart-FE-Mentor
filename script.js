const main = async () => {
  const reponse = await fetch("./data.json");
  const days = await reponse.json();

  console.log(days);

  const labels = [];
  days.forEach((day) => {
    labels.push(day.day);
  });
  const daysData = [];
  days.forEach((day) => {
    daysData.push(day.amount);
  });

  const data = {
    labels: labels,
    datasets: [
      {
        label: "",
        backgroundColor: [
          "hsl(10, 79%, 65%)",
          "hsl(10, 79%, 65%)",
          "hsl(186, 34%, 60%)",
          "hsl(10, 79%, 65%)",
          "hsl(10, 79%, 65%)",
          "hsl(10, 79%, 65%)",
          "hsl(10, 79%, 65%)",
        ],
        hoverBackgroundColor: [
          "hsl(10, 79%, 75%)",
          "hsl(10, 79%, 75%)",
          "hsl(186, 34%, 75%)",
          "hsl(10, 79%, 75%)",
          "hsl(10, 79%, 75%)",
          "hsl(10, 79%, 75%)",
          "hsl(10, 79%, 75%)",
        ],
        borderColor: "rgb(255, 99, 132)",
        data: daysData,
        borderRadius: 4,
        borderSkipped: false,
      },
    ],
  };

  const config = {
    type: "bar",
    data: data,
    options: {
      plugins: {
        tooltip: {
          displayColors: false,
          callbacks: {
            title: () => {
              "";
            },
            label: (context) => {
              return "$" + context.formattedValue;
            },
          },
        },
        legend: {
          display: false,
        },
      },
      scales: {
        y: {
          display: false,
          grid: {
            display: false,
          },
        },
        x: {
          grid: {
            drawBorder: false,
            display: false,
          },
        },
        ticks: {
          display: false,
        },
      },
    },
  };

  const myChart = new Chart(document.getElementById("myChart"), config);
};
main();
