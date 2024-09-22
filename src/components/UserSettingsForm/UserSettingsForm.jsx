import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import CSS from './UserSettingsForm.module.css'
import UserSettingsDailyNormaInfo from '../UserSettingsDailyNormaInfo/UserSettingsDailyNormaInfo'
import { Image } from 'cloudinary-react'
import { FiUpload } from "react-icons/fi";
import { userSchema, validateInput } from './userSettingsFormValidation'
import { yupResolver } from "@hookform/resolvers/yup"
import { useSelector } from 'react-redux'
import { selectUser } from '../../redux/auth/selectors.js'




const UserSettingsForm = () => {
  const user = useSelector(selectUser)
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userSchema),
    mode: "onChange",
    defaultValues: {
      gender: user?.gender === 'male'?'man':'woman',
      // resp.user.gender && 'woman'
      name: user?.name ||'User',
      // if(resp.user.name === null) {return resp.user.email.split('@'[0])}
      email: user.email,
      // resp.user.email

      weight: user?.weight || 0,
      // resp.user.weight||0
      time: user?.sportActiveTime || 0,
      // resp.user.hours||0
      liters: user?.dailyWater || 0,
    }
  });




  const isVerified = user.isVerified;

  const [gender, setGender] = useState(watch('gender'))

  useEffect(() => {
    const subscription = watch((value, { name }) => {
      if (name === 'gender') {
        setGender(value.gender);
      }
    })
    return () => subscription.unsubscribe();
    }, [watch]);


  function uploadToCloudinary() {
    // cloudinary.v2.uploader.upload("/home/my_image.jpg",
    //   { upload_preset: "my_preset" },
    //   (error, result) => {
    //   console.log(result, error);
    // });
  }

  const validateInputValue = async (evt) => {

    const key = evt.target.name
    const value = evt.target.value

    await validateInput(key, value)
      .then((validValue) => {
        console.log('Valid value:', validValue);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }



  function calculateLiters() {

    const weight = watch('weight')

    if (weight !== '0' && weight !== '') {

      const time = watch('time')

      if (gender === 'woman') {
        const volume = (weight * 0.03) + (time * 0.4)
        return volume.toFixed(1)
      }
      else {
        const volume = (weight * 0.04) + (time * 0.6)
        return volume.toFixed(1)
      }
    }
    return NaN
    }


  return (
    <div className={CSS.formContainer}>
      <form
        className={CSS.settingsForm}
      onSubmit={handleSubmit((data) => console.log(data))}
        >

        <div className={CSS.avatarBlock}>

          <Image
          className={CSS.avatarImage}
          cloudName="dwyxffoux"
          publicId="nvtxl4guwbr4a3atayvr"
          crop="scale"
        />
          <label htmlFor='avatar' className={CSS.uploadTitle}>
          <FiUpload className={CSS.uploadIcon} />
            Upload a photo

          <input className={CSS.uploadTitleInput}
            onChange={uploadToCloudinary()}
            type='file' name='avatar' id='avatar'
            accept='image/png, image/jpeg'>
          </input>

          </label>

        </div>

        <div className={CSS.genderBlockWrapper }>
          <span className={CSS.boldInputLabel}>
            Your gender identity
          </span>

          <span className={CSS.radioBtnWrapper}>
            <label htmlFor='woman' className={CSS.radioLabel}>
              <input className={CSS.radioBtn}
              type="radio" name='woman' id='woman' value='woman'
              {...register('gender', { required: true })} />
              <span className={CSS.customRadioBtn}></span>
              Woman
            </label>


            <label htmlFor='man' className={CSS.radioLabel}>
              <input className={CSS.radioBtn}
              type="radio" name='man' id='man' value='man'
            {...register('gender', { required: true })}/>
            <span className={CSS.customRadioBtn}></span>
            Man
            </label>
          </span>
        </div>

        <div className={CSS.desktopBlock}>
          <div className={CSS.leftDesktopBlock}>
          <label htmlFor='name' className={CSS.boldInputLabel}>
           Your name
              <input
                className={errors.name ? `${CSS.errorInput}` : `${CSS.textInput}`}
                type="input" name='name'
                {...register('name')}
                onBlur={(evt) => validateInputValue(evt)} />

          {errors.name && <p className={CSS.errorMessage}>
            {errors.name.message}
          </p>}
        </label>

        <label htmlFor='email' className={`${CSS.boldInputLabel} ${CSS.marginLabel}`}>
          Email {!isVerified &&(<span className={CSS.warninIcon} title="Email not verified!">⚠️ Email not verified!</span>)}
          <input className={errors.email ? CSS.errorInput : CSS.textInput}
                type="input" name='email'
                {...register('email')}
              onBlur={(evt) => validateInputValue(evt)} />

          {errors.email && <p className={CSS.errorMessage}>
              {errors.email.message}
          </p>}
            </label>

            <UserSettingsDailyNormaInfo />

        </div>


        <div className={CSS.rightDesktopBlock}>
          <label htmlFor='weight' className={CSS.inputLabel}>
            Your weight in kilograms:
            <input
            className={errors.weight ? CSS.errorInput : CSS.textInput}
                type="input" name='weight'
                {...register('weight')}
                onBlur={(evt) => validateInputValue(evt)} />
            {errors.weight && <p className={CSS.errorMessage}>
              {errors.weight.message}
          </p>}
        </label>

        <label htmlFor='time' className={`${CSS.inputLabel} ${CSS.marginLabel}`}>
            The time of active participation in sports:
          <input
            className={errors.time ? CSS.errorInput : CSS.textInput}
                type="input" name='time'
                {...register('time')}
                onBlur={(evt) => validateInputValue(evt)} />

          {errors.time && <p className={CSS.errorMessage}>
              {errors.time.message}
          </p>}
        </label>

        <span className={CSS.waterPerDayTitle}>
          The required amount of water in liters per day:
          <span className={CSS.litersPerDay}>
            {isNaN(calculateLiters()) ? '0.0' : calculateLiters()} L
          </span>
        </span>

        <label form='liters' className={`${CSS.boldInputLabel} ${CSS.marginLabel}`}>
          Write down how much water you will drink:
              <input className={CSS.textInput}
                type="input" name='liters'
            {...register('liters')}
                onBlur={(evt) => validateInputValue(evt)} />
          {errors.liters && <p className={CSS.errorMessage}>
              {errors.liters.message}
          </p>}

        </label>
      </div>
    </div>
          <input className={CSS.submitBtn}type="submit" value='Save' />
      </form>

    </div>
  )
}

export default UserSettingsForm
