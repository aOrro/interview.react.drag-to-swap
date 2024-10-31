import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 600px;
    margin: auto;
    color: #585858;
`;

export const PrintWrapper = styled.div``;

export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Title = styled.div`
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
`;

export const PageLayout = styled.div`
    display: flex;
    flex-wrap: wrap;
    background: #2778a5;
    border-radius: 8px;
    padding: 20px;
    margin: 17px 0 42px;
    justify-content: space-between;
`;

export const PrintPhoto = styled.div`
    img {
        max-width: 100%;
    }
`;

export const PrintPhotoActive = styled.div`
    position: fixed;
    z-index: 9999;
    border-radius: 50%;
    border: 5px solid #00468b;
    width: 100px;
    height: 100px;
    overflow: hidden;
`;
