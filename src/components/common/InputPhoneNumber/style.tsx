import styled from 'styled-components';

const ContentWrapper = styled.div`
  .ant-select-selector {
    background-color: transparent !important;
    border: none !important;
  }
  .ant-select:focus {
    border: none !important;
  }
  .ant-input:hover {
    border-right: none;
  }
  .ant-input:focus {
    background-color: transparent;
  }
  .ant-input {
    padding: 0.75rem;
    border: none !important;
    background-color: #f1f2f6;
    border-radius: 0.5rem !important;
  }

  .ant-form-item-has-error
    :not(.ant-input-disabled):not(.ant-input-borderless).ant-input,
  .ant-form-item-has-error
    :not(.ant-input-affix-wrapper-disabled):not(.ant-input-affix-wrapper-borderless).ant-input-affix-wrapper,
  .ant-form-item-has-error
    :not(.ant-input-disabled):not(.ant-input-borderless).ant-input:hover,
  .ant-form-item-has-error
    :not(.ant-input-affix-wrapper-disabled):not(.ant-input-affix-wrapper-borderless).ant-input-affix-wrapper:hover {
    background-color: #f1f2f6;
  }
`;

export default ContentWrapper;
