// Plotly Challenge

// initialize the page with initial id data

// from activity 2.04
function buildPlots() {

  d3.json("../../data/samples.json").then((data)=> {
    console.log(data)

    // grab values from the data json object to build the plots and table
    var names = data.names;
    var id = data.metadata.id;
    var ethnicity = data.metadata.ethnicity;
    var gender = data.metadata.gender;
    var age = data.metadata.age;
    var location = data.metadata.location;
    var bbtype = data.metadata.bbtype;
    var wfreq = data.metadata.wfreq;
    var samples_id = data.samples.id;
    var otu_ids = data.samples.otu_ids;
    var sample_values = data.samples.sample_values;
    var otu_labels = data.samples.otu_labels;
    
    // create multiple traces
    // activity 1.07 & 1.08

    // trace1 for pulldown menu names
    var trace1 = {
      type: "scatter",
      mode: "lines",
      name: name,
      x: dates,
      y: closingPrices,
      line: {
        color: "#17BECF"
      };

      // trace2 for "metadata" data
      var trace2 = {
      type: "scatter",
      mode: "lines",
      name: name,
      x: dates,
      y: closingPrices,
      line: {
        color: "#17BECF"
      };

      // trace3 for "samples" data
      var trace3 = {
      type: "scatter",
      mode: "lines",
      name: name,
      x: dates,
      y: closingPrices,
      line: {
          color: "#17BECF"
      };

      // Combining both traces
      var data = [trace1, trace2];




    };










    var data = [trace1];

    var layout = {
      title: `${stock} closing prices`,
      xaxis: {
        range: [startDate, endDate],
        type: "date"
      },
      yaxis: {
        autorange: true,
        type: "linear"
      }
    };

    Plotly.newPlot("plot", data, layout);

    };







  // Use D3 to select the dropdown menu 
  var dropdown = d3.select("#selDataset");

  // read the data 
  d3.json("Data/samples.json").then((data)=> {
      console.log(data)

      // get the id data to the dropdwown menu
      data.names.forEach(function(name) {
          dropdown.append("option").text(name).property("value");
      });

      // call the functions to display the data and the plots to the page
      getPlot(data.names[0]);
      getInfo(data.names[0]);
  });
}

init();





  })};


  //  Create the Traces
  // var trace1 = {
  //   x: data.otu.id,
  //   y: data.sample.value.map(),
  //   type: "bar",
  //   name: "Top 10 OTU's"
   

//*******************************************************/
// const url = "http://localhost:52330/Homework/Plotly-Challenge/data/samples.json";


// /**
//  * Helper function to select stock data
//  * Returns an array of values
//  * @param {array} rows
//  * @param {integer} index
//  * index 0 - Date
//  * index 1 - Open
//  * index 2 - High
//  * index 3 - Low
//  * index 4 - Close
//  * index 5 - Volume
//  */
// function unpack(rows, index) {
//   return rows.map(function(row) {
//     return row[index];
//   });
// }

// function buildPlot() {
//   d3.json(url).then(function(data) {

//     // Grab values from the data json object to build the plots
//     var name = data.dataset.name;
//     var stock = data.dataset.dataset_code;
//     var startDate = data.dataset.start_date;
//     var endDate = data.dataset.end_date;
//     var dates = unpack(data.dataset.data, 0);
//     var closingPrices = unpack(data.dataset.data, 4);

//     var trace1 = {
//       type: "scatter",
//       mode: "lines",
//       name: name,
//       x: dates,
//       y: closingPrices,
//       line: {
//         color: "#17BECF"
//       }
//     };

//     var data = [trace1];

//     var layout = {
//       title: `${stock} closing prices`,
//       xaxis: {
//         range: [startDate, endDate],
//         type: "date"
//       },
//       yaxis: {
//         autorange: true,
//         type: "linear"
//       }
//     };

//     Plotly.newPlot("plot", data, layout);

//   });
// }

// buildPlot();



//*******************************************************/
// Dropdown Menu

// Use D3 to create an event handler
// d3.selectAll("body").on("change", updatePage);

// function updatePage() {
//   // Use D3 to select the dropdown menu
//   var dropdownMenu = d3.selectAll("#selectOption").node();
//   // Assign the dropdown menu item ID to a variable
//   var dropdownMenuID = dropdownMenu.id;
//   // Assign the dropdown menu option to a variable
//   var selectedOption = dropdownMenu.value;

//   console.log(dropdownMenuID);
//   console.log(selectedOption);
// }

//***************************************
//*******************************************************/
// Bar Chart
// Use sample_values as the values for the bar chart.
// Use otu_ids as the labels for the bar chart.
// Use otu_labels as the hovertext for the chart.




//*******************************************************/
// Bubble Chart
// Use otu_ids for the x values.
// Use sample_values for the y values.
// Use sample_values for the marker size.
// Use otu_ids for the marker colors.
// Use otu_labels for the text values.




//*******************************************************/
// Demographic Information
// Display the sample metadata, i.e., an individual's demographic information.
// Display each key-value pair from the metadata JSON object somewhere on the page.



