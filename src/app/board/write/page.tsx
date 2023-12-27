import { Button } from "flowbite-react";
import { actionInsertBoard } from "../action";

export default function page() {

    return (
        <div>

            <a href="/board">
                <Button color="dark">↩ 목록</Button>
            </a>

            <div>글쓰기</div>

            <form action={actionInsertBoard}>
                <table>
                    <tbody>
                        <tr>
                            <th>제목</th>
                            <td>
                                <input type="text" name="title" id="title" required />
                            </td>
                        </tr>

                        <tr>
                            <th>내용</th>
                            <td>
                                <input type="text" name="contents" id="contents" required />
                            </td>
                        </tr>
                    </tbody>
                </table>

                <Button color="red" type='submit'>저장 </Button>
            </form>

        </div>
    )
}
