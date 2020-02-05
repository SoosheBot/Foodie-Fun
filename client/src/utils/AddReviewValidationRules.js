export default function validate(values) {
    let errors = {};
    
    if(!values.menu_item) {
        errors.menu_item = 'Menu item is required';
    }
    if(!values.item_price) {
        errors.item_price = 'Price is required';
    }
    if(!values.item_rating) {
        errors.item_rating = 'Enter a rating';
    }
    if(!values.item_review) {
        errors.item_review = 'Enter a short review';        
    }
    if(!values.restaurant_id) {
        errors.restaurant_id = 'Enter the restaurant ID';
    }
    if(!values.date_visited) {
        errors.date_visited = 'Enter visit date';
    }    
    return errors;
};