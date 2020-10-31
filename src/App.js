import './App.css';
import React, { useState } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import Input from '@material-ui/core/Input';
import Search from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';
import { orange, purple } from '@material-ui/core/colors';
import { ThemeProvider, createMuiTheme } from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import IconButton from '@material-ui/core/IconButton';
import {
  NavigateNext,
  NavigateBefore,
  ExpandLess,
  ExpandMore,
} from '@material-ui/icons';
import UpArrow from '@material-ui/icons/ArrowUpwardRounded';
import DownArrow from '@material-ui/icons/ArrowDownwardRounded';
import Carousel from 'react-bootstrap/Carousel';
import logo from './assets/Logo.svg';
import buy from './assets/Buy.svg';
import image1 from './assets/prod01.png';
import image2 from './assets/prod02.jpg';
import image3 from './assets/prod03.png';
import image4 from './assets/prod04.png';
import styled from 'styled-components';

import 'swiper/swiper.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

function App() {
  const [position, setPosition] = useState(0);
  const [colorName, setColorName] = useState([
    'Fucsia',
    'Casal',
    'Carmim Médio',
    'Preto',
  ]);
  const [colors, setColors] = useState([
    '#A9095E',
    '#2A5A75',
    '#A14830',
    '#000000',
  ]);
  const [sizes, setSizes] = useState([
    '33',
    '34',
    '35',
    '36',
    '37',
    '38',
    '39',
    '40',
    '41',
    '42',
  ]);
  const [images, setImages] = useState([image1, image2, image3, image4]);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [activeColorIndex, setActiveColorIndex] = useState(0);
  const [activeSizeIndex, setActiveSizeIndex] = useState(0);
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  const theme = createMuiTheme({
    palette: {
      primary: orange,
    },
  });

  const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));

  const classes = useStyles();

  const StyledIconButton = styled(IconButton)`
    border: 2px solid #2a5a75;
    width: 34px;
    height: 34px;
    &:focus {
      outline: none;
    }
  `;

  const StyledLateralButton = styled(IconButton)`
    width: 34px;
    height: 34px;
    &:focus {
      outline: none;
    }
  `;
  const ColorButton = withStyles((theme) => ({
    root: {
      width: 404,
      height: 60,
      color: theme.palette.getContrastText('#32917B'),
      backgroundColor: '#32917B',
      '&:focus': {
        outline: 'none',
        backgroundColor: '#32917B',
      },
      '&hover': {
        backgroundColor: '#32917B',
      },
      fontFamily: 'Montserrat',
      fontWeight: 400,
      fontSize: 18,
    },
  }))(Button);

  const nextImage = () => {
    console.log(activeImageIndex);
    if (activeImageIndex < images.length - 1) {
      setActiveImageIndex(activeImageIndex + 1);
    }
  };
  const backImage = () => {
    if (activeImageIndex > 0) {
      setActiveImageIndex(activeImageIndex - 1);
    }
  };

  const handleNext = () => {
    if (index < 2) {
      setIndex(index + 1);
    }
  };

  const handlePrevious = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };
  const returnImages = () => {
    return images.map((image, index) => {
      return (
        <Image
          src={image}
          style={{ height: 80, width: 80, marginTop: 9 }}
          className={activeImageIndex === index ? 'active' : 'inactive'}
          onClick={() => setActiveImageIndex(index)}
          // onClick={console.log('clicked')}
          key={index}
        />
      );
    });
  };

  const returnColors = () => {
    return colors.map((color, index) => {
      return (
        <span
          key={index}
          className={
            activeColorIndex === index ? 'active-color' : 'inactive-color'
          }
          onClick={() => setActiveColorIndex(index)}
          style={{ backgroundColor: color }}
          id="item-color-circle"
        ></span>
      );
    });
  };
  const returnColorsSmaller = () => {
    return colors.map((color, index) => {
      return (
        <span
          key={index}
          onClick={() => setActiveColorIndex(index)}
          style={{ backgroundColor: color }}
          id="item-color-circle-s"
        ></span>
      );
    });
  };

  const returnSizes = () => {
    return sizes.map((size, index) => {
      return (
        <span
          key={index}
          className={
            activeSizeIndex === index ? 'active-size' : 'inactive-size'
          }
          onClick={() => setActiveSizeIndex(index)}
          id="block-size"
        >
          {size}
        </span>
      );
    });
  };
  return (
    <Container fluid id="general-container">
      <Row id="logo-container">
        <Col id="logo-subcontainer">
          <Row id="row-logo" className="d-flex justify-content-center ">
            <img src={logo} />
          </Row>
        </Col>
      </Row>
      <Row
        className="nav-bar border-top border-bottom"
        style={{ height: 75, borderTopColor: 'black' }}
      >
        <Col lg={2}>
          <div id="container-login-registry">
            <span className="text-login-registry">Entrar</span>
            <span id="text-login-registry-pipe">|</span>
            <span className="text-login-registry">Cadastrar</span>
          </div>
        </Col>
        <Col id="col-products" lg={{ span: 4, offset: 2 }}>
          <div id="container-options-products">
            <span className="option-text">SAPATOS</span>
            <span className="option-text">BOLSAS</span>
            <span className="option-text">ACESSÓRIOS</span>
            <span className="option-text">OFF</span>
          </div>
        </Col>
        <Col lg={{ span: 1, offset: 1 }}>
          <ThemeProvider theme={theme}>
            <Input
              placeholder="Busca"
              id="input-with-icon-adornment"
              startAdornment={
                <InputAdornment position="start">
                  <Search id="search-input" />
                </InputAdornment>
              }
            />
          </ThemeProvider>
        </Col>
        <Col lg={{ span: 1 }}>
          <div id="counter-container">
            <img src={buy} style={{ marginBottom: 10 }} />
            <span style={{ paddingLeft: 20 }}>Contador</span>
          </div>
        </Col>
      </Row>
      <Row
        className="d-flex align-items-center"
        style={{ height: 35, backgroundColor: 'transparent' }}
      >
        <Col lg={2}>
          <div id="container-login-registry">
            <span className="text-login-home">Home</span>
            <span id="text-login-home-pipe">/</span>
            <span className="text-login-option">Sapatos</span>
          </div>
        </Col>
      </Row>
      <Row>
        <Col lg={2}>
          <div
            style={{
              marginLeft: 40,
              backgroundColor: 'transparent',
              width: 82,
              textAlign: 'center',
              marginTop: 19,
            }}
          >
            <span>Vídeo</span>
            <iframe
              width="82"
              height="45"
              src="https://www.youtube.com/embed/kjPTQLgGpq8"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div
            style={{
              backgroundColor: 'transparent',
              marginLeft: 40,
              width: 82,
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'column',
            }}
          >
            <div className={classes.root}>
              <StyledLateralButton onClick={backImage}>
                <ExpandLess />
              </StyledLateralButton>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {returnImages()}
            </div>
            <div style={{ marginTop: 10 }} className={classes.root}>
              <StyledLateralButton onClick={nextImage}>
                <ExpandMore />
              </StyledLateralButton>
            </div>
          </div>
        </Col>
        <Col
          lg={4}
          style={{
            display: 'flex',
            alignItems: 'center',
            backgroundColor: 'transparent',
          }}
        >
          <Image
            // style={{ width: '100%', height: '100%' }}
            id="image-exhibition"
            src={images[activeImageIndex]}
          />
        </Col>
        <Col
          lg={{ span: 4 }}
          style={{
            display: 'flex',
            justifyContent: 'center',
            backgroundColor: 'transparent',
          }}
        >
          <div id="container-product-description">
            <div id="container-title">
              <span id="title-product">RASTEIRA TIRA DEDO</span>
            </div>
            <div id="container-code">
              <span className="code-style">RT 0568 | 03.07.0653</span>
            </div>
            <div id="container-prices">
              <span id="total-price">R$ 69,00 </span>
              <span id="pipe-style">|</span>
              <span id="discount-price">R$ 55,20</span>
            </div>
            <div id="container-division">
              <span id="division-style-text">Ou 6x de R$ 9,20</span>
            </div>
            <div id="color-title">
              <span className="code-style-color">Cor: </span>
              <span
                style={{ color: colors[activeColorIndex] }}
                className="code-style-color-description"
              >
                {colorName[activeColorIndex]}
              </span>
            </div>
            <div id="list-colors">
              {/* <span
                onClick={() => setPosition(1)}
                style={{ backgroundColor: colors[position] }}
                id="item-color-circle"
              ></span> */}
              {returnColors()}
            </div>
            <div id="list-sizes">
              <span className="code-style">Tamanho: </span>
              <span className="code-style-color-description">
                {sizes[activeSizeIndex]}
              </span>
            </div>
            <div id="list-block-sizes">
              {returnSizes()}
              {/* <div id="block-size">teste</div>
              <div id="block-size">teste</div>
              <div id="block-size">teste</div> */}
            </div>
            <div
              style={{
                marginTop: 53,
                backgroundColor: 'transparent',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <ColorButton>ADICIONAR À SACOLA</ColorButton>
            </div>
            <div id="description-container">
              <span className="code-text">
                Rasteira em atanado soft com tira no dedo e fechamento de
                fivela. Possui sola sempre na cor do cabedal.
              </span>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col lg={{ span: 4, offset: 4 }}>
          <div
            style={{
              backgroundColor: 'transparent',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <span id="title-suggestions">QUEM VIU VIU TAMBÉM</span>
          </div>
        </Col>
      </Row>
      <Row>
        <Col
          style={{
            display: 'flex',
            backgroundColor: 'transparent',
            height: 500,
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              width: '100%',
              textAlign: 'center',
              marginTop: 19,
            }}
          >
            <Carousel
              controls={false}
              indicators={false}
              style={{
                textAlign: 'center',
                flexDirection: 'column',
                alignItems: 'center',
              }}
              activeIndex={index}
              onSelect={handleSelect}
            >
              <Carousel.Item>
                <Row>
                  <Col lg={3}>
                    <Image
                      // style={{ width: '100%', height: '100%' }}
                      className="image-slider"
                      src={images[activeImageIndex]}
                    />
                  </Col>
                  <Col>
                    <Image
                      // style={{ width: '100%', height: '100%' }}
                      className="image-slider"
                      src={images[activeImageIndex]}
                    />
                  </Col>
                  <Col>
                    <Image
                      // style={{ width: '100%', height: '100%' }}
                      className="image-slider"
                      src={images[activeImageIndex]}
                    />
                  </Col>
                  <Col>
                    <Image
                      // style={{ width: '100%', height: '100%' }}
                      className="image-slider"
                      src={images[activeImageIndex]}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col lg={3} style={{ backgroundColor: 'transparent' }}>
                    <div id="price-and-color-container">
                      <div
                        style={{ backgroundColor: 'transparent' }}
                        id="price-description"
                      >
                        R$ 204,90
                      </div>
                      <div
                        style={{
                          backgroundColor: 'transparent',
                          width: '50%',
                          textAlign: 'end',
                        }}
                      >
                        {returnColorsSmaller()}
                      </div>
                    </div>
                  </Col>
                  <Col lg={3} style={{ backgroundColor: 'transparent' }}>
                    <div id="price-and-color-container">
                      <div
                        style={{ backgroundColor: 'transparent' }}
                        id="price-description"
                      >
                        R$ 204,90
                      </div>
                      <div
                        style={{
                          backgroundColor: 'transparent',
                          width: '50%',
                          textAlign: 'end',
                        }}
                      >
                        {returnColorsSmaller()}
                      </div>
                    </div>
                  </Col>
                  <Col lg={3} style={{ backgroundColor: 'transparent' }}>
                    <div id="price-and-color-container">
                      <div
                        style={{ backgroundColor: 'transparent' }}
                        id="price-description"
                      >
                        R$ 204,90
                      </div>
                      <div
                        style={{
                          backgroundColor: 'transparent',
                          width: '50%',
                          textAlign: 'end',
                        }}
                      >
                        {returnColorsSmaller()}
                      </div>
                    </div>
                  </Col>
                  <Col lg={3} style={{ backgroundColor: 'transparent' }}>
                    <div id="price-and-color-container">
                      <div
                        style={{ backgroundColor: 'transparent' }}
                        id="price-description"
                      >
                        R$ 204,90
                      </div>
                      <div
                        style={{
                          backgroundColor: 'transparent',
                          width: '50%',
                          textAlign: 'end',
                        }}
                      >
                        {returnColorsSmaller()}
                      </div>
                    </div>
                  </Col>
                </Row>
              </Carousel.Item>
              <Carousel.Item>
                <Row>
                  <Col lg={3}>
                    <Image
                      // style={{ width: '100%', height: '100%' }}
                      className="image-slider"
                      src={images[activeImageIndex]}
                    />
                  </Col>
                  <Col>
                    <Image
                      // style={{ width: '100%', height: '100%' }}
                      className="image-slider"
                      src={images[activeImageIndex]}
                    />
                  </Col>
                  <Col>
                    <Image
                      // style={{ width: '100%', height: '100%' }}
                      className="image-slider"
                      src={images[activeImageIndex]}
                    />
                  </Col>
                  <Col>
                    <Image
                      // style={{ width: '100%', height: '100%' }}
                      className="image-slider"
                      src={images[activeImageIndex]}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col lg={3} style={{ backgroundColor: 'transparent' }}>
                    <div id="price-and-color-container">
                      <div
                        style={{ backgroundColor: 'transparent' }}
                        id="price-description"
                      >
                        R$ 204,90
                      </div>
                      <div
                        style={{
                          backgroundColor: 'transparent',
                          width: '50%',
                          textAlign: 'end',
                        }}
                      >
                        {returnColorsSmaller()}
                      </div>
                    </div>
                  </Col>
                  <Col lg={3} style={{ backgroundColor: 'transparent' }}>
                    <div id="price-and-color-container">
                      <div
                        style={{ backgroundColor: 'transparent' }}
                        id="price-description"
                      >
                        R$ 204,90
                      </div>
                      <div
                        style={{
                          backgroundColor: 'transparent',
                          width: '50%',
                          textAlign: 'end',
                        }}
                      >
                        {returnColorsSmaller()}
                      </div>
                    </div>
                  </Col>
                  <Col lg={3} style={{ backgroundColor: 'transparent' }}>
                    <div id="price-and-color-container">
                      <div
                        style={{ backgroundColor: 'transparent' }}
                        id="price-description"
                      >
                        R$ 204,90
                      </div>
                      <div
                        style={{
                          backgroundColor: 'transparent',
                          width: '50%',
                          textAlign: 'end',
                        }}
                      >
                        {returnColorsSmaller()}
                      </div>
                    </div>
                  </Col>
                  <Col lg={3} style={{ backgroundColor: 'transparent' }}>
                    <div id="price-and-color-container">
                      <div
                        style={{ backgroundColor: 'transparent' }}
                        id="price-description"
                      >
                        R$ 204,90
                      </div>
                      <div
                        style={{
                          backgroundColor: 'transparent',
                          width: '50%',
                          textAlign: 'end',
                        }}
                      >
                        {returnColorsSmaller()}
                      </div>
                    </div>
                  </Col>
                </Row>
              </Carousel.Item>
              <Carousel.Item>
                <Row>
                  <Col lg={3}>
                    <Image
                      // style={{ width: '100%', height: '100%' }}
                      className="image-slider"
                      src={images[activeImageIndex]}
                    />
                  </Col>
                  <Col>
                    <Image
                      // style={{ width: '100%', height: '100%' }}
                      className="image-slider"
                      src={images[activeImageIndex]}
                    />
                  </Col>
                  <Col>
                    <Image
                      // style={{ width: '100%', height: '100%' }}
                      className="image-slider"
                      src={images[activeImageIndex]}
                    />
                  </Col>
                  <Col>
                    <Image
                      // style={{ width: '100%', height: '100%' }}
                      className="image-slider"
                      src={images[activeImageIndex]}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col lg={3} style={{ backgroundColor: 'transparent' }}>
                    <div id="price-and-color-container">
                      <div
                        style={{ backgroundColor: 'transparent' }}
                        id="price-description"
                      >
                        R$ 204,90
                      </div>
                      <div
                        style={{
                          backgroundColor: 'transparent',
                          width: '50%',
                          textAlign: 'end',
                        }}
                      >
                        {returnColorsSmaller()}
                      </div>
                    </div>
                  </Col>
                  <Col lg={3} style={{ backgroundColor: 'transparent' }}>
                    <div id="price-and-color-container">
                      <div
                        style={{ backgroundColor: 'transparent' }}
                        id="price-description"
                      >
                        R$ 204,90
                      </div>
                      <div
                        style={{
                          backgroundColor: 'transparent',
                          width: '50%',
                          textAlign: 'end',
                        }}
                      >
                        {returnColorsSmaller()}
                      </div>
                    </div>
                  </Col>
                  <Col lg={3} style={{ backgroundColor: 'transparent' }}>
                    <div id="price-and-color-container">
                      <div
                        style={{ backgroundColor: 'transparent' }}
                        id="price-description"
                      >
                        R$ 204,90
                      </div>
                      <div
                        style={{
                          backgroundColor: 'transparent',
                          width: '50%',
                          textAlign: 'end',
                        }}
                      >
                        {returnColorsSmaller()}
                      </div>
                    </div>
                  </Col>
                  <Col lg={3} style={{ backgroundColor: 'transparent' }}>
                    <div id="price-and-color-container">
                      <div
                        style={{ backgroundColor: 'transparent' }}
                        id="price-description"
                      >
                        R$ 204,90
                      </div>
                      <div
                        style={{
                          backgroundColor: 'transparent',
                          width: '50%',
                          textAlign: 'end',
                        }}
                      >
                        {returnColorsSmaller()}
                      </div>
                    </div>
                  </Col>
                </Row>
              </Carousel.Item>
            </Carousel>
            <div
              style={{
                backgroundColor: 'transparent',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 23.8,
              }}
            >
              <StyledIconButton
                className="button-next"
                onClick={handlePrevious}
              >
                <NavigateBefore />
              </StyledIconButton>
              <span
                style={{
                  fontSize: 14,
                  backgroundColor: 'transparent',
                  width: 100,
                  textAlign: 'center',
                }}
              >{`${index + 1} de 3`}</span>
              <StyledIconButton>
                <NavigateNext onClick={handleNext} />
              </StyledIconButton>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
