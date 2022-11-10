import React, { Fragment, useEffect, useRef, useState } from "react";
import { ImgWrapper, Img, Button, Article } from "./styles";
import { MdFavoriteBorder } from "react-icons/md";

const DEFAULT_IMAGE =
  "https://res.cloudinary.com/midudev/image/upload/w_150/v1555671700/category_hamsters.jpg";

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const refElement = useRef(null);
  const [show, setShow] = useState(false);

  // lazy load in the component
  useEffect(
    function () {
      Promise.resolve(
        typeof window.IntersectionObserver !== "undefined"
          ? window.IntersectionObserver
          : import("intersection-observer")
      ).then(() => {
        const observer = new window.IntersectionObserver(function (entries) {
          const { isIntersecting } = entries[0];
          if (isIntersecting) {
            setShow(true);
            observer.disconnect();
          }
        });

        observer.observe(refElement.current);
      });
    },
    [refElement]
  );

  return (
    <Article ref={refElement}>
      {show && (
        <Fragment>
          <a href={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </a>

          <Button>
            <MdFavoriteBorder size="32px" />
            {likes} likes!
          </Button>
        </Fragment>
      )}
    </Article>
  );
};
