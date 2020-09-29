// Plotly Challenge

// initialize the page with initial id data

// from activity 2.04
function init() {

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
    
    // ***** Bar Chart *****
    // Use sample_values as the values for the bar chart.
    // Use otu_ids as the labels for the bar chart.
    // Use otu_labels as the hovertext for the chart.

    // create variables required for bar chart
    var top10SampleValues = sample_values.descending.slice(0, 10).reverse();
    console.log(top10SampleValues);
    
    var top10OtuIDs = 

    console.log(top10OtuIDs);

    var top10OtuLabels =

    console.log(top10OtuLabels);

    // create a trace for bar chart
    // from activity 1.02

    var trace1 = {
      type:"bar",
      orientation: "h",
      x: top10SampleValues,
      y: top10OtuID,
      text: top10OtuLabels,
      marker: {
        color: "blue"
        width: 0.5
      }
    };

    // create the data array for the plot
    var data1 = [trace1];

    // define the plot layout
    var layout = {
      title: "Top 10 OTU",
      font:{
        family: "Arial"
      }
      xaxis:{ title: "Sample Count" },
      yaxis:{ title: "OTU ID's" }
      bargap: 0.1
    };
      
    // Plot the chart to a div tag with id "bar-plot"
    Plotly.newPlot("bar", data1, layout);


  // ***** Bubble Chart *****
  // Use otu_ids for the x values.
  // Use sample_values for the y values.
  // Use sample_values for the marker size.
  // Use otu_ids for the marker colors.
  // Use otu_labels for the text values.

  // trace2 for bubble chart
  var trace2 = {
    type: "bubble",
    mode: "markers",
    text: otu_labels,
    x: otu_ids,
    y: sample_values,
    marker: {
      size: sample_values,
      colors: otu_ids,
      opacity: 0.8
    }
  };
    
  var data2 = [trace2];

  var layout = {
    title: "OTU ID vs. Count",
    showlegend: true,
    height: 500,
    width: 1000
  };

  Plotly.newPlot("bubble", data2, layout);




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
// Demographic Information
// Display the sample metadata, i.e., an individual's demographic information.
// Display each key-value pair from the metadata JSON object somewhere on the page.



