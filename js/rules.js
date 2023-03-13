function panacheRules() {
  old = $("#p_rule").html();
  $("#p_rule").fadeOut(200, function () {
    $(this)
      .html(
        `
    <b>Rules: </b> <br>

    1.&nbsp;&nbsp;The team size is limited to a maximum of X members. <br>
    2.&nbsp;&nbsp;Teams will be judged based on costumes, theme, walking stance and attitude. <br>
    3.&nbsp;&nbsp;The theme is “contemporary twist to ethnic Indian attires”. <br>
    4.&nbsp;&nbsp;Decision of the judges will be final and binding. <br>
    5.&nbsp;&nbsp;Teams have to carry their own props. <br>
    6.&nbsp;&nbsp;Time limit is X minutes. Exceeding the time limit will lead to negative marking. <br>
    7.&nbsp;&nbsp;Teams should carry their tracks in C.D, pen drive etc. <br>
    8.&nbsp;&nbsp;Vulgarity is strongly prohibited. Any form of obscenity will lead to debarring the team from the contest. <br>
    
    `
      )
      .fadeIn(200);
  });
  $("#p_rule").hover(
    function () {},
    function () {
      $(this).fadeOut(50, function () {
        $(this).html(old).fadeIn(50);
      });
    }
  );
}

function bodyrockRules() {
  old = $("#b_rule").html();
  $("#b_rule").fadeOut(200, function () {
    $(this)
      .html(
        `
      <b>Rules: </b> <br>
  
        1.&nbsp;&nbsp;The medium of participation is Solo or Duet only.<br>
        2.&nbsp;&nbsp;The time duration of the dance should not exceed X minutes.<br>
        3.&nbsp;&nbsp;Under any confusion or dispute, the decisions of judges will be final.<br>
        4.&nbsp;&nbsp;Anyone violating any of the above-mentioned rules or causing obscenity of any kind will lead to immediate disqualification.<br>

      
      `
      )
      .fadeIn(200);
  });
  $("#b_rule").hover(
    function () {},
    function () {
      $(this).fadeOut(50, function () {
        $(this).html(old).fadeIn(50);
      });
    }
  );
}

function swaranganRules() {
  old = $("#s_rule").html();
  $("#s_rule").fadeOut(200, function () {
    $(this)
      .html(
        `
      <b>Rules: </b> <br>
  
        1.&nbsp;&nbsp;Songs may be in hindi or english only.<br>
        2.&nbsp;&nbsp;Songs sung in the first round must not be repeated in the finals.<br>
        3.&nbsp;&nbsp;Bring your karaoke track with you(if needed).<br>
        4.&nbsp;&nbsp;Participants will be given 2-4 minutes to perform on stage.<br>
        5.&nbsp;&nbsp;Time limit should be strictly followed. Participants will be heavily penalized by judges for not doing so.<br>
        6.&nbsp;&nbsp;Not more than one instrument can be used in the performance and that can be played by the participants/accompanist(participants must bring the instruments with them).<br>
        7.&nbsp;&nbsp;Judges reserve the right to stop a participant's performance at any time.<br>
        8.&nbsp;&nbsp;Rap portion or refrains are not permissible.<br>
        9.&nbsp;&nbsp;The decision of the judges shall be final and binding.<br>
        10.&nbsp;&nbsp;Obscenity(at the discretion of judges) of any kind is not allowed and will lead to immediate disqualification.<br>
      `
      )
      .fadeIn(200);
  });
  $("#s_rule").hover(
    function () {},
    function () {
      $(this).fadeOut(50, function () {
        $(this).html(old).fadeIn(50);
      });
    }
  );
}
