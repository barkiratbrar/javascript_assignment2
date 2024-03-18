//Event listener for DOMContentLoaded event to ensure the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    //Selecting all thumbnail images within the #thumbnails unordered list
    const thumbnails = document.querySelectorAll('#thumbnails img');
    //Select the featured image element by its id
    const featuredImage = document.getElementById('featuredImage');

    //Adding a click event listener to each thumbnail image
    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            //To retrieve the data-fullsize attribute value of the clicked thumbnail
            const fullSizeImgSrc = this.getAttribute('data-fullsize');
            //To update the src attribute of the featured image to display the full-size image
            featuredImage.src = fullSizeImgSrc;
            //To update the alt text of the featured image to match the thumbnail's alt text
            featuredImage.alt = this.alt.replace("Thumbnail", "Featured");
        });
    });
});
