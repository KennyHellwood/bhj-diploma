/**
 * Класс RegisterForm управляет формой
 * регистрации
 * */
class RegisterForm extends AsyncForm {
    /**
    * Производит регистрацию с помощью User.register
    * После успешной регистрации устанавливает
    * состояние App.setState( 'user-logged' )
    * и закрывает окно, в котором находится форма
    * */
    onSubmit(data) {
        User.register(data, (err, response) => {
            if (response && response.success === true) {
                // сбрасываем данные формы
                document.forms['register-form'].reset();
                // авторизуем пользователя
                App.setState('user-logged');
                // закрываем форму
                App.getModal('register').close();
            }
        });
    }
}
