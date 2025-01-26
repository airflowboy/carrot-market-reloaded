"use server";

export async function handleForm(prevState: any, formData: FormData) {
  console.log(prevState);
  console.log(formData);
  await new Promise((resolve) => {
    setTimeout(resolve, 5000);
  });
  return {
    errors: ["로그인 실패", "비밀번호가 너무 짧습니다."],
  };
}
