import React from 'react';
import { useForm } from 'react-hook-form';

import * as styles from './leadForm.module.css';

const LeadForm = props => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <form className={styles.leadForm} onSubmit={handleSubmit(onSubmit)}>
      <input
        className={errors.name ? styles.errorInput : styles.input}
        placeholder="Name (Required)"
        {...register('name', { required: true })}
      />
      {errors.name && (
        <span className={styles.inputError}>Please, enter your name.</span>
      )}
      <input
        className={errors.email ? styles.errorInput : styles.input}
        placeholder="Email (Required)"
        {...register('email', { required: true })}
      />
      {errors.email && (
        <span className={styles.inputError}>
          Please, double check your email address. Unfortunately this input
          field isn’t THAT smart.
        </span>
      )}
      <input
        className={styles.input}
        placeholder="Subject"
        {...register('subject')}
      />
      <textarea
        className={styles.input}
        placeholder="Your inquiry"
        {...register('inquiry')}
        rows="6"
      />
      <button className={styles.submit} type="submit">
        Send message
      </button>
    </form>
  );
};

export default LeadForm;
