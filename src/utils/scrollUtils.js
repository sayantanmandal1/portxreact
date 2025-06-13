export const smoothScrollTo = (targetPosition) => {
  window.scrollTo({
    top: targetPosition,
    behavior: 'smooth'
  });
};