import styled,{createGlobalStyle} from 'styled-components';
import image1 from './images/image1.jpg'

export const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }
  body {
    background-image: url(${image1});
    background-size: cover;
    margin: 0;
    padding: 0 20px;
    display: flex;
    justify-content: center;
  }
  * {
    font-family: 'Catamaran', sans-serif;
    box-sizing: border-box;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  > p {
    color: #fff;
  }
  .score {
    color: #fff;
    font-size: 2rem;
    margin: 0;
  }
  h1 {
    font-family: Fascinate Inline;
    background-image: linear-gradient(180deg, #fff, #e28366);
    font-weight: 400;
    background-size: 100%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    filter: drop-shadow(2px 2px #0085a3);
    font-size: 60px;
    text-align: center;
    margin: 20px;
}
.start, .next {
    position:relative;
    overflow: hidden;
    cursor: pointer;
    font-size: 30px;
    color: black;
    background: linear-gradient(180deg, #ffffff, #0085a3);
    border:none;
    // box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 30px;
    height: 55px;
    // margin: 20px 0;
    // padding: 0 40px;
}

.visible{
    display: inline-block;
    padding: 0.5rem 4.5rem;
    height: 100%;
    width: 100%;
    transition: all .2s;
}
.invisible{
    display: inline-block;
    position: absolute;
    padding: 0.2rem 0;
    left: 0;
    top: -100%;
    height: 100%;
    width: 100%;
    transition: all .5s;
}
.start:hover .visible{
color: transparent;
}
.start:hover .invisible{
transform: translateY(100%);
}
.next:hover .visible{
color: transparent;
}
.next:hover .invisible{
transform: translateY(100%);
}
`;