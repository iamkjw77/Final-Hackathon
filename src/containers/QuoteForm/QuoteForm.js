/* eslint-disable jsx-a11y/label-has-associated-control */
import { Formik } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';

import Button from 'components/Button/Button';
import FieldForm from 'components/FieldForm/FieldForm';
import Checkbox from 'components/Checkbox/Checkbox';

const initialValue = {
  name: '',
  email: '',
  mobile: '',
  model: '',
  year: '',
  postalCode: '',
  services: '',
  message: '',
};

const phoneRegExp = /^\(?([0-9]{3})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;

const validation = Yup.object({
  name: Yup.string().required('Name is required.'),
  email: Yup.string()
    .email('Invalid email address.')
    .required('Email is Required.'),
  mobile: Yup.string()
    .matches(phoneRegExp, 'Invalid mobile.')
    .required('Mobile is required.'),
  model: Yup.string().required('Model is required.'),
  year: Yup.number().required('Year is required.'),
  postalCode: Yup.string().required('Postal-code is required.'),
  services: Yup.bool().oneOf([true], 'Services is required.'),
  message: Yup.string(),
});

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
              <FieldForm
                formik={formik}
                name="name"
                title="Your Name"
                type="text"
                required
              />
              <FieldForm
                formik={formik}
                name="email"
                title="Your Email"
                type="email"
                required
              />
              <FieldForm
                formik={formik}
                name="mobile"
                title="Phone Number"
                type="text"
                required
              />
              <FieldForm
                formik={formik}
                name="model"
                title="Make And Model"
                type="text"
                required
              />
              <FieldForm
                formik={formik}
                name="year"
                title="Year"
                type="text"
                required
              />
              <FieldForm
                formik={formik}
                name="postalCode"
                title="Postal Code"
                type="text"
                required
              />
              <FieldForm
                formik={formik}
                name="services"
                title="What services are you interested in?"
                required
              >
                <Checkbox label="Ceramic Pro" />
                <Checkbox label="Paint Protection Film" />
                <Checkbox label="Paint Correction" />
                <Checkbox label="Detailing" />
                <Checkbox label="Window Tinting" />
              </FieldForm>
              <FieldForm
                formik={formik}
                name="message"
                title="Message"
                type="text"
              />
              <Button color="blue" bottom="16%" left="47%" outline fullWidth>
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
