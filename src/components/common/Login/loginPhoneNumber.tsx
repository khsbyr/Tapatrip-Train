import { Input, Checkbox } from 'antd';
import InputPhoneNumber from '@components/common/InputPhoneNumber';
import ContentWrapper from '@components/common/InputPhoneNumber/style';

export default function loginPhoneNumber() {
  return (
    <form action="" className="space-y-6">
      <InputPhoneNumber />
      <ContentWrapper>
        <div className="space-y-3.5">
          <label
            className="text-base text-cardDate font-medium pl-2"
            htmlFor=""
          >
            Нууц үг
          </label>
          <Input.Password
            className="rounded-lg bg-bg border-0 p-2 py-3 text-cardDate text-base"
            placeholder="Нууц үг оруулна уу"
          />
        </div>
      </ContentWrapper>

      <Checkbox className="text-base text-cardDate pl-2"> Сануулах</Checkbox>
      <div className="flex text-base space-x-4">
        <button className="w-1/3 bg-blue-500 py-2 text-white font-medium rounded-lg">
          Нэвтрэх
        </button>
        <button className="w-2/3 border-2 py-2 font-medium rounded-lg text-cardDate">
          Бүртгүүлэх
        </button>
      </div>
      <p className="flex justify-center">
        <a
          href=""
          className="underline text-blue-400 text-sm hover:text-blue-300"
        >
          Нууц үгээ мартсан уу?
        </a>
      </p>
    </form>
  );
}
