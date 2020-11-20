import React from 'react';
import { useForm } from 'react-hook-form';
import styles from './leadForm.module.css';

const LeadForm = props => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <form className={styles.leadForm} onSubmit={handleSubmit(onSubmit)}>
      <input
        className={errors.name ? styles.errorInput : styles.input}
        name="name"
        placeholder="Name (Required)"
        ref={register({ required: true })}
      />
      {errors.name && (
        <span className={styles.inputError}>Please, enter your name.</span>
      )}
      <input
        className={errors.email ? styles.errorInput : styles.input}
        name="email"
        placeholder="Email (Required)"
        ref={register({ required: true })}
      />
      {errors.email && (
        <span className={styles.inputError}>
          Please, double check your email address. Unfortunately this input
          field isn’t THAT smart.
        </span>
      )}
      <input
        className={styles.input}
        name="subject"
        placeholder="Subject"
        ref={register}
      />
      <textarea
        className={styles.input}
        name="subject"
        placeholder="Your inquiry"
        rows="6"
        ref={register}
      />
      <button className={styles.submit} type="submit">
        Send message
      </button>
    </form>
  );
};

export default LeadForm;
