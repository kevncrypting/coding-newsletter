const featuredPosts = [
  { // this is object 1 of the featuredPosts array
    title: "Featured Post Title 1",
    copy: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae unde mollitia porro quia aut aliquam amet nesciunt officiis quasi atque officia fugiat ratione consectetur vitae odio, dolorum eveniet temporibus rerum! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae unde mollitia porro quia aut aliquam amet nesciunt officiis quasi atque officia fugiat ratione consectetur vitae odio, dolorum eveniet temporibus rerum!"
  },
  { // this is object 2 of the featuredPosts array
    title: "Featured Post Title 2",
    copy: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae unde mollitia porro quia aut aliquam amet nesciunt officiis quasi atque officia fugiat ratione consectetur vitae odio, dolorum eveniet temporibus rerum! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae unde mollitia porro quia aut aliquam amet nesciunt officiis quasi atque officia fugiat ratione consectetur vitae odio, dolorum eveniet temporibus rerum!"
  },
  { // this is object 3 of the featuredPosts array
    title: "Featured Post Title 3",
    copy: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae unde mollitia porro quia aut aliquam amet nesciunt officiis quasi atque officia fugiat ratione consectetur vitae odio, dolorum eveniet temporibus rerum! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae unde mollitia porro quia aut aliquam amet nesciunt officiis quasi atque officia fugiat ratione consectetur vitae odio, dolorum eveniet temporibus rerum!"
  }
]

const latestPosts = [
  { // this is object 1 of the latestPosts array
    title: "The Dangers of Overheating: How to Stay Cool in a Hot Room",
    copy: "Overheating can be a serious problem, especially if you're not used to it. It can lead to dehydration, heat stroke, and other health issues. Here are some tips to stay cool in a hot room: drink plenty of water, wear loose-fitting, light-colored clothing, use a fan or air conditioning if possible, and avoid strenuous activity during the hottest part of the day."
  },
  { // this is object 2 of the latestPosts array
    title: "Why a Good Night's Sleep Depends on Room Temperature",
    copy: "Did you know that the temperature of your bedroom can affect the quality of your sleep? According to studies, the ideal sleeping temperature is between 60 and 67 degrees Fahrenheit. If your room is too hot, you may have trouble falling asleep or staying asleep. Try using a fan, opening a window, or using an air conditioner to keep your room cool."
  },
  { // this is object 3 of the latestPosts array
    title: "How to Beat the Heat: Tips for a More Comfortable Room",
    copy: "It's easy to feel uncomfortable in a hot room, but there are things you can do to make it more bearable. Try closing the blinds or curtains during the hottest part of the day to block out the sun."
  }
]

// creates a variable that points to the main element in the HTML document
let mainSection = document.querySelector('main');

// creates two variables that point to separate elements in our HTML document with the respective class selected (these are the section elements that we want our articles to appear in!)
let featuredPostsSection = document.querySelector('.featured-posts');
let latestPostsSection = document.querySelector('.latest-posts');

mainSection.style.display = 'flex'; // converts mainSection into a flexbox, so that the sections appear side by side
mainSection.style.gap = '10px' // adds 10px gap between the two sections

featuredPostsSection.style.backgroundColor = 'lightgreen'; // adds a lightgreen background to the featuredPostsSection to help differentiate it
featuredPostsSection.style.padding = '10px' // adds 10px padding to the section

latestPostsSection.style.backgroundColor = 'lightblue'; // adds a lightblue background to the featuredPostsSection to help differentiate it
latestPostsSection.style.padding = '10px' // adds 10px padding to the section

// creates a function called "createPosts" that takes in two parameters - the first is "categoryLocation" which points to where we want the posts to go, and the second parameter is "posts", which in this case is an array of objects (which we created above!) where the objects are our separate posts
function createPosts(categoryLocation, posts) {

    // since "posts" is an array, we can use the array method .forEach to iterate over every "post" in the array and do the following things:
    posts.forEach(post => {

        // creates three new elements: an article, an h3, and a p
        // each element is assigned to a variable that we can use to reference later
        let article = document.createElement('article');
        let h3 = document.createElement('h3');
        let p = document.createElement('p');

        // appends the article (created on line 55) to one of the two post section variables (created on lines 35 and 36, again this variable points to the area on the HTML document that contains the class listed) depending on which section was passed in as an argument in the function (see lines 72 and 73)
        categoryLocation.appendChild(article);

        // appends the h3 (created on line 56) and p (created on line 57) to the article (created on line 55)
        article.appendChild(h3);
        article.appendChild(p);

        // accesses the post in the blogPosts array and assigns the value of "title" to the h3 element and the value of "copy" to the p element
        h3.innerText = post.title;
        p.innerText = post.copy;
    }) // this function body REPEATS for each (that's why it's called forEach!) "post" object in the "posts" array until it goes through the entire array
}

function placeFeaturedPosts() {
  createPosts(featuredPostsSection, featuredPosts);
  // This line of code was commented out after Brandon requested to have the functionality changed - initially the content was to be shown on mouse over, but now it should show on click of a button
  // featuredPostHeader.removeEventListener('mouseover', placeFeaturedPosts);
};

function placeLatestPosts() {
  createPosts(latestPostsSection, latestPosts);
    // This line of code was commented out after Brandon requested to have the functionality changed - initially the content was to be shown on mouse over, but now it should show on click of a button
  // latestPostHeader.removeEventListener('mouseover', placeLatestPosts);
};

/* This whole block of code was commented out after Brandon requested to have the functionality changed - initially the content was to be shown on mouse over, but now it should show on click of a button

// createPosts(featuredPostsSection, featuredPosts )// invokes the function createPosts on the featuredPosts array, which runs the function that we created above and populates the HTML page with each article object stored in featuredPosts - these article objects are appended to the featuredPostsSection
// createPosts(latestPostsSection, latestPosts); // invokes the function createPosts on the latestPosts array, which runs the function that we created above and populates the HTML page with each article object stored in latestPosts - these article objects are appended to the latestPostsSection

// let featuredPostHeader = document.getElementById('featured-header');
// let latestPostHeader = document.getElementById('latest-header');

// featuredPostHeader.addEventListener('mouseover', placeFeaturedPosts);
// latestPostHeader.addEventListener('mouseover', placeLatestPosts);

*/

let featuredButton = document.getElementById('featuredButton');
let latestButton = document.getElementById('latestButton');

featuredButton.addEventListener('click', placeFeaturedPosts, { once:true });
latestButton.addEventListener('click', placeLatestPosts, { once:true });