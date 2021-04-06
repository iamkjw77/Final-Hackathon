/* eslint-disable jsx-a11y/label-has-associated-control */
import { Formik } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';

import Button from 'components/Button/Button';
import FieldForm from 'components/FieldForm/FieldForm';
import Checkbox from 'components/Checkbox/Checkbox';
import ErrorMsgBlock from 'components/ErrorMsg/ErrorMsg';
import FormBlock from 'components/FormBlock/FormBlock';
import TextArea from 'components/TextArea/TextArea';

const initialValue = {
  name: '',
  email: '',
  mobile: '',
  model: '',
  year: '',
  postalCode: '',
  services: [],
  message: '',
};

const phoneRegExp = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

const validation = Yup.object({
  name: Yup.string().required('Name is required.'),
  email: Yup.string()
    .email('Invalid email address.')
    .required('Email is Required.'),
  mobile: Yup.string()
    .matches(phoneRegExp, 'Invalid mobile.')
    .required('Mobile is required.'),
  model: Yup.string().required('Model is required.'),
  year: Yup.number()
    .typeError('Year must be a number')
    .required('Year is required.'),
  postalCode: Yup.string().required('Postal-code is required.'),
  services: Yup.array()
    .min(1, 'Please choose one or more.')
    .required('Services is required.'),
  message: Yup.string(),
});

const defaultServices = [
  'Ceramic Pro',
  'Paint Protection Film',
  'Paint Correction',
  'Detailing',
  'Window Tinting',
];

const TITLE = {
  name: 'Your Name',
  email: 'Your Email',
  mobile: 'Phone Number',
  model: 'Make And Model',
  year: 'Year',
  postalCode: 'Postal Code',
};

const QuoteForm = () => {
  return (
    <Formik
      initialValues={initialValue}
      validationSchema={validation}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {(formik) => (
        <FormSection>
          <form onSubmit={formik.handleSubmit}>
            <fieldset>
              <legend>Get A Quote</legend>

              {Object.entries(TITLE).map(([key, value]) => (
                <FormBlock title={value} required>
                  <FieldForm
                    formik={formik}
                    name={key}
                    type={key === 'email' ? 'email' : 'text'}
                  />
                </FormBlock>
              ))}

              <FormBlock title="What services are you interested in?" required>
                {defaultServices.map((name) => (
                  <Checkbox
                    formik={formik}
                    label={`${name}`}
                    name="services"
                    value={`${name}`}
                  />
                ))}

                {formik.touched.services && formik.errors.services ? (
                  <ErrorMsgBlock className="field-error">
                    {formik.errors.services}
                  </ErrorMsgBlock>
                ) : null}
              </FormBlock>

              <FormBlock title="Message">
                <TextArea formik={formik} name="message" />
              </FormBlock>

              <Button
                color="gray"
                bottom="16%"
                left="45%"
                outline
                disabled={!(formik.isValid && formik.dirty)}
              >
                Submit
              </Button>
            </fieldset>
          </form>
        </FormSection>
      )}
    </Formik>
  );
};

const FormSection = styled.section`
  fieldset {
    display: grid;
    grid-template-rows: repeat(4, 125px);
    grid-template-columns: repeat(2, 50%);
    width: 80%;
    margin: 0 auto;
    border-left: 1px solid #dee2e6;
    border-top: 1px solid #dee2e6;

    legend {
      position: absolute;
      width: 1px;
      height: 1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
    }
  }
`;
export default QuoteForm;
