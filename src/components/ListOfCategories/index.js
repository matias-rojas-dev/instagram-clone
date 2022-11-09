import React, { Fragment, useEffect, useState } from 'react';
import { Category } from '../Category';
import { Item, List } from './styles';

export const ListOfCategories = () => {
  const [categories, setCategories] = useState([])
  const [showFixed, setShowFixed] = useState(false)

  useEffect(() => {
    fetch('https://instagram-clone-plum-ten.vercel.app/categories')
      .then((res) => res.json())
      .then((response) => {
        setCategories(response);
      });
  }, []);

  useEffect(function () {
    const onScroll = event => {
      const newShowFixed = window.scrollY > 200
      showFixed !== newShowFixed && setShowFixed(newShowFixed)
    }

    document.addEventListener('scroll', onScroll)


    return () => document.removeEventListener('scroll', onScroll)
  }, [showFixed])

  const renderList = (fixed) => (
    <List className={fixed ? 'fixed' : ''}>
      {categories.map((category) => (
        <Item key={category.id}>
          <Category {...category} />
        </Item>
      ))}
    </List>
  );

  return (
    <Fragment>
      {renderList()} 
      {showFixed && renderList(true)}
    </Fragment>
  );
};
