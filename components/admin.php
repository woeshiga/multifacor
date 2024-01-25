<table>
    <thead>
        <tr>
            <th>
                ID
            </th>
            <th>
                Имя
            </th>
            <th>
                Фамилия
            </th>
            <th>
                Логин
            </th>
            <th>
                Email
            </th>
            <th>
                Статус
            </th>
        </tr>
    </thead>
    <tbody>
        <?
        $sql = "SELECT id, name, lastname, login, email, status FROM `users`";
        $res = mysqli_query($con, $sql);
        $users = mysqli_fetch_all($res);

        foreach($users as &$user) {
            echo "<tr>";
            for ($i = 0; $i < count($user); $i++) {
                echo "<td>".$user[$i]."</td>";
            }
            echo "<tr>";
        }
        ?>
    </tbody>
</table>