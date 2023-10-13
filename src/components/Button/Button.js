import { LoadMoreBtn } from './Button.styled';

export const Button = ({ onClick }) => {
  return (
    <LoadMoreBtn onClick={onClick} >Load More</LoadMoreBtn>
  )
}