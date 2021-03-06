import styled from 'styled-components';

const ContentWrapper = styled.div`
  .ant-select {
    border: none !important;
    color: #0a3761 !important;
  }
  .ant-select-selector {
    border: none !important;
    background-color: #f1f2f6 !important;
    height: 3rem !important;
    border-radius: 0.5rem !important;
    align-items: center !important;
  }
  .ant-select-selection-item {
    margin-left: 5px !important;
  }
  .ant-select:focus {
    border: none !important;
  }
  .ant-input:hover {
    border-right: none;
  }
  .ant-input {
    padding: 0.75rem;
    border: none !important;
    background: #f1f2f6 !important;
    border-radius: 0.5rem !important;
  }
  .ant-form-item-explain-error {
    padding-left: 5px;
  }

  .ant-form-item-has-error
    :not(.ant-input-disabled):not(.ant-input-borderless).ant-input,
  .ant-form-item-has-error
    :not(.ant-input-affix-wrapper-disabled):not(.ant-input-affix-wrapper-borderless).ant-input-affix-wrapper,
  .ant-form-item-has-error
    :not(.ant-input-disabled):not(.ant-input-borderless).ant-input:hover,
  .ant-form-item-has-error
    :not(.ant-input-affix-wrapper-disabled):not(.ant-input-affix-wrapper-borderless).ant-input-affix-wrapper:hover {
    background-color: #f1f2f6 !important;
  }
`;

export default ContentWrapper;
