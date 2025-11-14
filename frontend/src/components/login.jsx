import useAuthStore from "../stores/useAuthStore";

const AuthModal = () => {
  const modal = useAuthStore((status) => status.modal);
  const toggleModal = useAuthStore((status) => status.toggleModal);
}

const login = () => {
  return (
    <div>
      <button> Google로 게속하기 </button>
      <div>
        <form>
          <input placeholder="이메일" />
          <input placeholder="비밀번호" />
          <button> 로그인 </button>
        </form>
        <div> <p> 계정이 없으신가요? <span> 회원가입하기 </span> </p> </div>
      </div>
    </div>
  )
}

export default login;