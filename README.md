# Md Danish  
### 📧 danish150106@gmail.com  

# React Assignment – Day 2 and 3 Quiz

---

# **Day 2 Quiz**

## 1. What happens when you directly modify a prop inside a component?  
**Answer:** Nothing happens — props are read-only.

## 2. Which hook is used to manage state in functional components?  
**Answer:** `useState`

## 3. What is the correct way to update state based on the previous state value?  
**Answer:** `setState(prevState => prevState + 1)`

## 4. In React, data flows:  
**Answer:** From parent to child only

## 5. When should you lift state up?  
**Answer:** When multiple components need to share the same state

## 6. What does React use for efficient DOM updates?  
**Answer:** Virtual DOM

---

# **Day 3 Quiz**

## 1. What will be rendered when `count = 0` in this code:  
`{count && <div>Count: {count}</div>}`?  
**Answer:** Nothing will be rendered

## 2. Which is the correct way to conditionally render a component with ternary operator?  
**Answer:** Both A and B are correct

## 3. What method is commonly used to render lists in React?  
**Answer:** `map()`

## 4. Why are keys important in React lists?  
**Answer:** They help React identify which items have changed

## 5. When is it acceptable to use array index as a key?  
**Answer:** Only for static lists that don't change order

## 6. What happens when you use `{items.length && <div>Items: {items.length}</div>}` and items.length is 0?  
**Answer:** The number 0 renders

## 7. Which pattern is best for handling multiple conditions in JSX?  
**Answer:** If-else statements before return

## 8. What's the performance impact of using unstable keys (like Math.random())?  
**Answer:** React re-creates all list items on every render

## 9. What's the best way to handle empty arrays in list rendering?  
**Answer:** `{items.length ? items.map(...) : <EmptyMessage />}`

## 10. When should you use React.Fragment in conditional rendering?  
**Answer:** When you need to return multiple elements without a wrapper

