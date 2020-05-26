import React from 'react';
import { useForm } from 'react-hook-form';
import styles from './components.module.css';

export default props => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <form className={styles.leadForm} onSubmit={handleSubmit(onSubmit)}>
      <input
        className={errors.name ? styles.errorInput : styles.leadFormInput}
        name="name"
        placeholder="Name (Required)"
        ref={register({ required: true })}
      />
      <input
        className={errors.email ? styles.errorInput : styles.leadFormInput}
        name="email"
        placeholder="Email (Required)"
        ref={register({ required: true })}
      />
      <input
        className={styles.leadFormInput}
        name="subject"
        placeholder="Subject"
        ref={register}
      />
      <textarea
        className={styles.leadFormInput}
        name="subject"
        placeholder="Your inquiry"
        ref={register}
      />
      <button className={styles.leadFormSubmit} type="submit">
        Send message
      </button>
    </form>
  );
};
