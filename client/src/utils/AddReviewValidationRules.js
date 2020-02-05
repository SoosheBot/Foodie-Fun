export default function validate(reviews) {
    let errors = {};
    
    if(!reviews.menu_item) {
        errors.menu_item = 'Menu item is required';
    }
    if(!reviews.item_price) {
        errors.item_price = 'Price is required';
    }
    if(!reviews.item_rating) {
        errors.item_rating = 'Enter a rating';
    }
    if(!reviews.item_review) {
        errors.item_review = 'Enter a short review';        
    }
    if(!reviews.restaurant_id) {
        errors.restaurant_id = 'Enter the restaurant ID';
    }
    if(!reviews.date_visited) {
        errors.date_visited = 'Enter visit date';
    }    
    return errors;
};