// List of available tags
const tagList = [
    "liver",
    "pain",
    "right",
    "left",
    "pancreas",
    "kidney",
    "brain",
    "severe_pain",
    "tumour",
    "cancer",
    "MRI",
    "CT",
    "male",
    "female",
    "bone",
    "shoulder",
    "hip",
    "XRAY",
    "knee",
    "spine",
    "head",
    "abdomen",
    "contrast",
    "fragment",
    "detached",
    "injury",
    "torn",
    "rotator",
    "cuff",
    "abdominal",
    "dilatation"
  ];
  function handleTextInput() {
    const textInput = document.getElementById("text-input");
    const tagsContainer = document.getElementById("tags-container");
    const inputText = textInput.value.toLowerCase();
    
    // Clear previous suggestions
    tagsContainer.innerHTML = "";
    
    // Filter tags that match the input text
    const matchingTags = tagList.filter(tag => tag.startsWith(inputText));
    
    matchingTags.forEach(tag => {
      const tagElement = document.createElement("span");
      tagElement.className = "suggested-tag";
      tagElement.textContent = tag;
      tagsContainer.appendChild(tagElement);
    });
  }
  
//   // Function to handle the text input
//   function handleTextInput() {
//     console.log('dentro');
//     const textInput = document.getElementById("text-input");
//     const tagsContainer = document.getElementById("tags-container");
    
//     // Clear previous tags
//     tagsContainer.innerHTML = "";
    
//     // Split the input text into words
//     const words = textInput.value.split(" ");
    
//     // Process each word
//     words.forEach(word => {
//       const tag = word.toLowerCase();
      
//       // Check if the word starts with '#'
//       if (tag.startsWith("#")) {
//         const tagName = tag.substring(1); // Remove the '#' symbol
        
//         // Check if the tag exists in the list
//         if (tagList.includes(tagName)) {
//           // Format the existing tag
//           const tagElement = document.createElement("span");
//           tagElement.className = "existing-tag";
//           tagElement.textContent = tag;
//           tagsContainer.appendChild(tagElement);
//         } else {
//           // Format the new tag
//           const tagElement = document.createElement("span");
//           tagElement.className = "new-tag";
//           tagElement.textContent = tag;
//           tagsContainer.appendChild(tagElement);
//         }
//       } else {
//         // Just display the non-tag word
//         const wordElement = document.createElement("span");
//         wordElement.textContent = word + " ";
//         tagsContainer.appendChild(wordElement);
//       }
//     });
//   }
  
  // Event listener for the text input
  const textInput = document.getElementById("text-input");
  textInput.addEventListener("input", handleTextInput);
  