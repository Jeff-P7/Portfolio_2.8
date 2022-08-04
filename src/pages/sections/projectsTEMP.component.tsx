import React, { FC, useState } from 'react';
import { Div, Row, Col, Text } from '../../components/shared';
import styles from './sections.module.scss';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import ProjectsData from '../../data/projects.data';

/**
 * Projects Component
 */
export const Projects: FC = (): JSX.Element => {
  //   const [currentProject, setCurrentProject] = React.useState<number>(0);
  //   const cHandleCurrentProject = (slideNum: number) => {
  //     setCurrentProject(projectNum);
  //   }

  const [currentSlide, setCurrentSlide] = React.useState<number>(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  return (
    <Div classes="h-auto">
      <div className={styles['navigation-wrapper']}>
        <div ref={sliderRef}>
          {ProjectsData.map((item: any, index: number) => (
            <ProjectInfo data={item} key={index} />
          ))}
          {/* <div ref={sliderRef} className="keen-slider"> */}
          {/* <div className={`keen-slider__slide ${styles['number-slide1']}`}>
            1
          </div>
          <div className={`keen-slider__slide ${styles['number-slide2']}`}>
            2
          </div>
          <div className={`keen-slider__slide ${styles['number-slide3']}`}>
            3
          </div>
          <div className={`keen-slider__slide ${styles['number-slide4']}`}>
            4
          </div>
          <div className={`keen-slider__slide ${styles['number-slide5']}`}>
            5
          </div>
          <div className={`keen-slider__slide ${styles['number-slide6']}`}>
            6
          </div> */}
        </div>
        {loaded && instanceRef.current && (
          <>
            <Arrow
              left
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              disabled={currentSlide === 0}
            />

            <Arrow
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              disabled={
                currentSlide ===
                instanceRef.current.track.details.slides.length - 1
              }
            />
          </>
        )}
      </div>
      {loaded && instanceRef.current && (
        <div className={styles.dots}>
          {[
            ...Array(instanceRef.current.track.details.slides.length).keys(),
          ].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx);
                }}
                className={
                  styles['dot'] +
                  ' ' +
                  (currentSlide === idx ? styles['active'] : '')
                }
              ></button>
            );
          })}
        </div>
      )}
    </Div>
  );
};

export default Projects;

function Arrow(props: {
  disabled: boolean;
  left?: boolean;
  onClick: (e: any) => void;
}) {
  const disabled = props.disabled ? styles['arrow--disabled'] : '';
  return (
    <svg
      onClick={props.onClick}
      className={`${styles.arrow} ${
        props.left ? styles['arrow--left'] : styles['arrow--right']
      } ${disabled}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  );
}

// const Carousel: FC = (props): JSX.Element => {

//   return (
//     <Div margin="y-28" colorize>
//      <Row></Row>
//     </Div>
//   );
// };

const ProjectInfo = ({ data }): JSX.Element => {
  const { title, description, languages, technologies, tools, images, link } =
    data;

  return (
    <>
      <Row>
        <Col>
          <Row stack>
            <Col classes={styles.carousel__project} padding="y-3" colorize>
              <Text size="xl">Project</Text>
              <Text size="xl">{description || 'Waiting'}</Text>
            </Col>
            <Col classes={styles.carousel__project} padding="y-3" colorize>
              <Text size="xl">Languages</Text>
              {languages
                ? languages.map((item: string, index: number) => (
                    <Text size="xl" key={`${item}-${index}`}>
                      {item}
                    </Text>
                  ))
                : ''}
            </Col>
          </Row>
        </Col>
        <Col size={8}>
          {/* <ImageCarousel projectTitle={title} imageList={images} /> */}
        </Col>
        {/* </Row>
        <Row> */}
        <div className="w-full" />
        <Col classes={styles.carousel__project} padding="y-3" colorize>
          <Text size="xl">Technologies</Text>
          {technologies
            ? technologies.map((item: string, index: number) => (
                <Text size="xl" key={`${item}-${index}`}>
                  {item}
                </Text>
              ))
            : ''}
        </Col>
        <Col classes={styles.carousel__project} padding="y-3" colorize>
          <Text size="xl">Tools</Text>
          {tools
            ? tools.map((item: string, index: number) => (
                <Text size="xl" key={`${item}-${index}`}>
                  {item}
                </Text>
              ))
            : ''}
        </Col>
      </Row>
    </>
  );
};

// const ImageCarousel = ({ projectTitle = 'tabpik', imageList = [''] }) => {
//   const [currentImgIndex, setCurrentImgIndex] = useState(0);
//   const imgTitle = imageList[currentImgIndex] || 'tabpikOne';

//   const handleClickNext = () => {
//     // eslint-disable-next-line no-return-assign, no-param-reassign
//     setCurrentImgIndex((previous) => (previous += 1));
//   };

//   const handleClickPrev = () => {
//     // eslint-disable-next-line no-return-assign, no-param-reassign
//     setCurrentImgIndex((previous) => (previous -= 1));
//   };

//   // const imgPath = `../../../../assets/images/${projectTitle
//   //   .toString()
//   //   .toLowerCase()}/${imgTitle}.png`;

//   const coolImg = imagesDictionary[imgTitle];

//   return (
//     <>
//       {/* <Row classes="image__carousel h-full">
//           <Col align="start" size="8">
//             <img src={placeholder(500, 400)} alt="img" />
//           </Col>
//           <Col align="end">controls</Col>
//         </Row> */}
//       <Div classes={styles.image__carousel}>
//         <img src={placeholder(650, 400)} alt={imgTitle} className="img-fluid" />
//         <Div
//           classes={styles.image__carousel__control_wrapper}
//           style={{ float: 'right' }}
//         >
//           <Div>
//             <Row>
//               <Col classes={styles.image__carousel__control_wrapper_bar}>
//                 BAR
//               </Col>
//               <Col>
//                 <button onClick={handleClickNext} type="button">
//                   Random
//                 </button>
//                 <button onClick={handleClickNext} type="button">
//                   Random
//                 </button>
//               </Col>
//             </Row>
//           </Div>
//           {/* <button onClick={handleClickNext} type="button">
//               Random
//             </button> */}
//         </Div>
//       </Div>
//     </>
//   );
// };
