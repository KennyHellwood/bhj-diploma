/**
 * Класс CreateAccountForm управляет формой
 * создания нового счёта
 * */
class CreateAccountForm extends AsyncForm {
    /**
    * Создаёт счёт с помощью Account.create и закрывает
    * окно в случае успеха, а также вызывает App.update()
    * и сбрасывает форму
    * */
    onSubmit(data) {
        const requestData = { name: data.name };
        Account.create(requestData, (err, response) => {
            if (response && response.success === true) {
                // закрываем форму
                App.getModal('createAccount').close();
                // сбрасываем данные формы
                document.forms['new-account-form'].reset();
                // обновляем данные аккаунта
                App.update();
            }
        });
    }
}
