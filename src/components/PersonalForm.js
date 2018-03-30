import React from 'react'
import {connect} from 'react-redux'
import {reduxForm} from 'redux-form'
import {compose} from 'recompose'

import {FormContainer, Paper, Row} from './Layout'
import Button from './Button'
import TextInput from './Input'
import TextArea from './TextArea'

const PersonalForm = ({handleSubmit}) => (
  <FormContainer onSubmit={handleSubmit}>
    <Paper>
      <Row>
        <TextInput name="firstname" label="ชื่อ" />
        <TextInput name="lastname" label="นามสกุล" />
      </Row>

      <Row>
        <TextInput name="age" label="อายุ" type="number" />
        <TextInput name="birthdate" label="วันเกิด" type="date" float />
        <TextInput name="religion" label="ศาสนา" />
      </Row>
    </Paper>

    <Paper>
      <Row>
        <TextInput name="class" label="ระดับชั้น" />
        <TextInput name="school" label="โรงเรียน" />
      </Row>

      <Row>
        <TextInput name="address" label="ที่อยู่" />
        <TextInput name="phone" label="เบอร์โทรศัพท์" />
      </Row>

      <Row>
        <TextInput name="email" label="อีเมล" type="email" />
        <TextInput name="socialMedia" label="Social Media" />
      </Row>
    </Paper>

    <Paper>
      <Row>
        <TextInput name="disease" label="โรคประจำตัว" />
      </Row>

      <Row>
        <TextInput name="foodAllergy" label="อาหารที่แพ้" />
      </Row>

      <Row>
        <TextInput name="drugAllergy" label="ยาที่แพ้" />
      </Row>
    </Paper>

    <Paper>
      <Row>
        <TextInput name="shirtSize" label="ไซส์เสื้อ" />
      </Row>

      <Row>
        <TextArea
          name="activity"
          label="กิจกรรมหรือผลงานที่น้องๆ เคยทำหรือเข้าร่วม"
        />
      </Row>
    </Paper>

    <Row>
      <Button disabled>ขั้นตอนก่อนหน้า</Button>

      <Button type="submit">ขั้นตอนถัดไป</Button>
    </Row>
  </FormContainer>
)

const mapStateToProps = state => ({
  initialValues: state.camper,
})

const enhance = compose(
  connect(mapStateToProps),
  reduxForm({
    form: 'submission',
    enableReinitialize: true,
    keepDirtyOnReinitialize: true,
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
  }),
)

export default enhance(PersonalForm)
