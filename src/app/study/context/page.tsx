export default function page() {
    return (
        <div>
            Context 란?
            Context는 리액트 컴포넌트간에 어떠한 값을 공유할수 있게 해주는 기능입니다.
            주로 Context는 전역적(global)으로 필요한 값을 다룰 때 사용하는데요,
            꼭 전역적일 필요는 없습니다.

            Context를 단순히
            "리액트 컴포넌트에서 Props가 아닌 또 다른 방식으로 컴포넌트간에 값을 전달하는 방법이다"
            라고 접근을 하시는 것이 좋습니다.
        </div>
    )
}
