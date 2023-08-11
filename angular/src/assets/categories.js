function categoriesfnReview(){
    document.getElementById('review').id = 'review-click';
    document.getElementById('review-appear').className = 'review-click';
    document.getElementById('description').style.cssText = 'display: none;';
    document.getElementById('description-disappear').className = 'description-click';
}

function categoriesfnDescription(){
    document.getElementById('review-click').id = 'review';
    document.getElementById('review').className = 'review';
    document.getElementById('review-appear').className = 'review';
    document.getElementById('description').style.cssText = 'display: unset;';
    document.getElementById('description-disappear').className = 'description-title'
}
