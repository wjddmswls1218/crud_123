import Desk from "../models/Desk";

export const mainController = (req, res) => {
  res.render("main");
};

export const resultController = async (req, res) => {
  const { c, h, w } = req.query;

  if (c === "--선택--" || h === "--선택--" || w === "--선택--") {
    res.render("main", { errorMsg: "색상, 가로, 세로를 선택해주세요" });
  } else {
    try {
      const deskList = await Desk.find({
        color: c,
        height: parseInt(h),
        width: parseInt(w),
      });
      res.render("result", { list: deskList });
    } catch (e) {
      console.log(e);
      mainController(req, res);
    }
  }
};
