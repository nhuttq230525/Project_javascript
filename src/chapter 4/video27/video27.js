console.log("video 27")

const score = 8;

switch (true) {

    case (score >= 8 && score <= 10):
        console.log("hoc sinh gioi");
        break;

    case (score >= 6 && score < 8):
        console.log("hoc sinh kha");
        break;

    case (score >= 4 && score < 6):
        console.log("hoc sinh trung binh");
        break;

    default:
        console.log("hoc sinh yeu");
}