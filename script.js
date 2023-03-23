const blogPosts = [
  { // this is object 1 of the blogPosts array
    title: "The Dangers of Overheating: How to Stay Cool in a Hot Room",
    copy: "Overheating can be a serious problem, especially if you're not used to it. It can lead to dehydration, heat stroke, and other health issues. Here are some tips to stay cool in a hot room: drink plenty of water, wear loose-fitting, light-colored clothing, use a fan or air conditioning if possible, and avoid strenuous activity during the hottest part of the day."
  },
  { // this is object 2 of the blogPosts array
    title: "Why a Good Night's Sleep Depends on Room Temperature",
    copy: "Did you know that the temperature of your bedroom can affect the quality of your sleep? According to studies, the ideal sleeping temperature is between 60 and 67 degrees Fahrenheit. If your room is too hot, you may have trouble falling asleep or staying asleep. Try using a fan, opening a window, or using an air conditioner to keep your room cool."
  },
  { // this is object 3 of the blogPosts array
    title: "How to Beat the Heat: Tips for a More Comfortable Room",
    copy: "It's easy to feel uncomfortable in a hot room, but there are things you can do to make it more bearable. Try closing the blinds or curtains during the hottest part of the day to block out the sun."
  }
]

// creates a variable called "section" that points to the element in HTML document with the class "posts" (this is the section element that we want our articles to appear in!)
let section = document.querySelector('.posts')

// creates a function called "createPosts" that takes in a parameter called "blogPosts", which in this case is an array of objects (which we created above)
function createPosts(blogPosts) {

    // since "blogPosts" is an array, we can use the array method .forEach to iterate over every "post" in the array and do the following things:
    blogPosts.forEach(post => {

        // creates three new elements: an article, an h3, and a p
        // each element is assigned to a variable that we can use to reference later
        let article = document.createElement('article');
        let h3 = document.createElement('h3');
        let p = document.createElement('p');

        // appends the article (created on line 27) to the section variable (created on line 17, again this variable points to the area on the HTML document that contains the class ".posts")
        section.appendChild(article);

        // appends the h3 (created on line 28) and p (created on line 29) to the article (created on line 27)
        article.appendChild(h3);
        article.appendChild(p);

        // accesses the post in the blogPosts array and assigns the value of "title" to the h3 element and the value of "copy" to the p element
        h3.innerText = post.title;
        p.innerText = post.copy;
    }) // this function body REPEATS for each (that's why it's called forEach!) "post" object in the "blogPosts" array until it goes through the entire array
}

createPosts(blogPosts); // invokes the function createPosts on the blogPosts array, which runs the function that we created above and populates the HTML page with each article object stored in blogPosts