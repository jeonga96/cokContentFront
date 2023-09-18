import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { ErrorMessage } from "@hookform/error-message";

import * as STR from "../service/string";
import * as API from "../service/api";
import * as UD from "../service/useData";

export default function EventAdd() {
  const {
    handleSubmit,
    register,
    getValues,
    setValue,
    watch,
    formState: { isSubmitting, errors },
  } = useForm();
  const { evid } = useParams();

  useEffect(() => {
    if (!!evid) {
      setValue("_product", evid);
    }
  }, [evid]);

  const fnSubmit = () => {
    if (getValues("_terms") && getValues("_privacy")) {
      API.servicesPostData(STR.urlSetWzEvent, {
        guserFlag: getValues("_guserFlag"),
        busClassFlag: getValues("_busClassFlag"),
        product: getValues("_product"),
        cname: getValues("_cname"),
        name: getValues("_name"),
        job: getValues("_job"),
        jobDetail: getValues("_jobDetail"),
        telnum: getValues("_telnum"),
        eventPath: getValues("_eventPath"),
        remark: getValues("_remark"),
      }).then((res) => {
        if (res.status === "success") {
          UD.servicesUseToast("완료되었습니다.", "s");
          setTimeout(() => {
            window.location.href = "https://contents.gongsacok.com/home";
            // navigate("/eventprice/eventadd");
          }, 1500);
        }
      });
    } else {
      UD.servicesUseToast("모든 약관에 동의해 주세요.", "e");
    }
  };

  return (
    <div className="commonBox">
      <header className="eventAddHeader">
        <div>
          <div className="eventAddHeaderImg">
            <img src="../assets/imgs/wazzang_logo.png" alt="와짱로고" />
          </div>
          <div className="eventAddHeaderText">
            <h2 style={{ paddingBottom: "6px" }}>와짱 이벤트 신청하기</h2>
            <span>( 자세히 기재 요망 )</span>
          </div>
        </div>
      </header>

      <div
        className="commonContainer commonContainerEvent"
        style={{ margin: "14px 0" }}
      >
        <form
          className="commonContainerEventForm"
          onSubmit={handleSubmit(fnSubmit)}
        >
          {/* ------------------------------------------------------- */}
          <div className="eventFormWrap">
            <div>
              <h3 style={{ width: "200%" }}>공사콕 희원, 가입여부</h3>
            </div>
            <div>
              <div className="eventFormCheck">
                <label>
                  <input
                    type="radio"
                    value="1"
                    {...register("_guserFlag", {
                      required:
                        "가입 - 공사콕 희원, 가입여부가 입력되지 않았습니다.",
                    })}
                  />
                  가입
                </label>
                <label>
                  <input
                    type="radio"
                    value="0"
                    {...register("_guserFlag", {
                      required:
                        "미가입 - 공사콕 희원, 가입여부가 입력되지 않았습니다.",
                    })}
                  />
                  미가입
                </label>
              </div>
            </div>
          </div>

          <ErrorMessage
            errors={errors}
            name="_guserFlag"
            render={() => (
              <div className="eventReqError">
                공사콕 희원, 가입여부가 입력되지 않았습니다.
              </div>
            )}
          />

          {/* ------------------------------------------------------- */}
          <div className="eventFormWrap">
            <div>
              <h3>사업자 분류</h3>
            </div>
            <div>
              <div className="eventFormCheck">
                <label>
                  <input
                    type="radio"
                    value="일반"
                    {...register("_busClassFlag", {
                      required: "입력되지 않았습니다.",
                    })}
                  />
                  일반사업자
                </label>
                <label>
                  <input
                    type="radio"
                    value="법인"
                    {...register("_busClassFlag", {
                      required: "입력되지 않았습니다.",
                    })}
                  />
                  법인사업자
                </label>
              </div>
            </div>
          </div>

          <ErrorMessage
            errors={errors}
            name="_busClassFlag"
            render={() => (
              <div className="eventReqError">
                사업자 분류가 입력되지 않았습니다.
              </div>
            )}
          />

          {/* ------------------------------------------------------- */}
          <div className="eventFormWrap">
            <div>
              <h3>상품선택</h3>
            </div>
            <div>
              <div className="eventFormCheck">
                <label>
                  <input
                    type="radio"
                    value="1"
                    {...register("_product", {
                      required: "입력되지 않았습니다.",
                    })}
                  />
                  선택1
                </label>
                <label>
                  <input
                    type="radio"
                    value="2"
                    {...register("_product", {
                      required: "입력되지 않았습니다.",
                    })}
                  />
                  선택2
                </label>
                <label>
                  <input
                    type="radio"
                    value="3"
                    {...register("_product", {
                      required: "입력되지 않았습니다.",
                    })}
                  />
                  선택3
                </label>
                <label>
                  <input
                    type="radio"
                    value="4"
                    {...register("_product", {
                      required: "입력되지 않았습니다.",
                    })}
                  />
                  선택4
                </label>
              </div>
            </div>
          </div>
          <ErrorMessage
            errors={errors}
            name="_product"
            render={() => (
              <div className="eventReqError">
                상품선택이입력되지 않았습니다.
              </div>
            )}
          />

          {/* ------------------------------------------------------- */}
          <div className="eventFormWrap">
            <div>
              <h3>상호명</h3>
            </div>
            <div>
              <div className="eventFormText">
                <input
                  type="text"
                  {...register("_cname", {
                    required: "입력되지 않았습니다.",
                  })}
                  maxLength={15}
                />
              </div>
            </div>
          </div>
          <ErrorMessage
            errors={errors}
            name="_cname"
            render={() => (
              <div className="eventReqError">상호명이 입력되지 않았습니다.</div>
            )}
          />

          {/* ------------------------------------------------------- */}
          <div className="eventFormWrap">
            <div>
              <h3>대표 업종</h3>
            </div>
            <div>
              <div className="eventFormText">
                <input
                  type="text"
                  placeholder="15자 이내로 입력 ( 띄어쓰기 포함 )"
                  {...register("_job", {
                    required: "입력되지 않았습니다.",
                  })}
                  maxLength={15}
                />
              </div>
            </div>
          </div>
          <ErrorMessage
            errors={errors}
            name="_job"
            render={() => (
              <div className="eventReqError">
                대표업종이 입력되지 않았습니다.
              </div>
            )}
          />

          {/* ------------------------------------------------------- */}
          <div className="eventFormWrap">
            <div>
              <h3>상세 업종</h3>
            </div>
            <div>
              <div className="eventFormText">
                <textarea
                  style={{ height: "70px" }}
                  placeholder="60자 이내로 입력 ( 띄어쓰기 포함 )"
                  maxLength={60}
                  {...register("_jobDetail", {
                    required: "입력되지 않았습니다.",
                  })}
                />
              </div>
            </div>
          </div>
          <ErrorMessage
            errors={errors}
            name="_jobDetail"
            render={() => (
              <div className="eventReqError">
                상세업종이 입력되지 않았습니다.
              </div>
            )}
          />

          {/* ------------------------------------------------------- */}
          <div className="eventFormWrap">
            <div>
              <h3>신청자 성함</h3>
            </div>
            <div>
              <div className="eventFormText">
                <input
                  type="text"
                  {...register("_name", {
                    required: "입력되지 않았습니다.",
                  })}
                />
              </div>
            </div>
          </div>
          <ErrorMessage
            errors={errors}
            name="_name"
            render={() => (
              <div className="eventReqError">
                신청자성함이 입력되지 않았습니다.
              </div>
            )}
          />

          {/* ------------------------------------------------------- */}
          <div className="eventFormWrap">
            <div>
              <h3>휴대폰</h3>
            </div>
            <div>
              <div className="eventFormText">
                <input
                  type="text"
                  maxLength={13}
                  value={
                    (watch("_telnum") &&
                      watch("_telnum")
                        .replace(/[^0-9]/g, "")
                        .replace(
                          /(^02|^0505|^1[0-9]{3}|^0[0-9]{2})([0-9]+)([0-9]{4}$)/,
                          "$1-$2-$3"
                        )
                        .replace("--", "-")) ||
                    ""
                  }
                  {...register("_telnum", {
                    required: "입력되지 않았습니다.",
                  })}
                />
              </div>
            </div>
          </div>
          <ErrorMessage
            errors={errors}
            name="_telnum"
            render={() => (
              <div className="eventReqError">휴대폰이 입력되지 않았습니다.</div>
            )}
          />

          {/* ------------------------------------------------------- */}
          <div className="eventFormWrap">
            <div>
              <h3 style={{ width: "200%" }}>이벤트 참여 경로</h3>
            </div>
            <div>
              <div className="eventFormText">
                <input
                  type="text"
                  maxLength={60}
                  {...register("_eventPath", {
                    required: "입력되지 않았습니다.",
                  })}
                />
              </div>
            </div>
          </div>
          <ErrorMessage
            errors={errors}
            name="_eventPath"
            render={() => (
              <div className="eventReqError">
                이벤트 참여 경로가 입력되지 않았습니다.
              </div>
            )}
          />

          {/* ------------------------------------------------------- */}
          <div className="eventFormWrap">
            <div>
              <h3>전달사항</h3>
            </div>
            <div>
              <div className="eventFormText">
                <textarea
                  style={{ height: "120px" }}
                  maxLength={100}
                  placeholder="100자 이내로 입력 ( 띄어쓰기 포함 )"
                  {...register("_remark", {
                    required: "입력되지 않았습니다.",
                  })}
                />
              </div>
            </div>
          </div>
          <ErrorMessage
            errors={errors}
            name="_remark"
            render={() => (
              <div className="eventReqError">
                전달사항이 입력되지 않았습니다.
              </div>
            )}
          />

          <div className="eventCheck">
            <input id="terms" type="checkbox" {...register("_terms")} />
            <label htmlFor="terms">
              이용약관에 동의합니다.
              <a href="https://15777942.wazzang.com/wz/personal.do">
                (상세보기)
              </a>
            </label>
          </div>

          <div className="eventCheck">
            <input id="privacy" type="checkbox" {...register("_privacy")} />
            <label htmlFor="privacy">
              개인정보 수집 및 이용에 동의합니다.
              <a href="https://15777942.wazzang.com/wz/useterms.do">
                (상세보기)
              </a>
            </label>
          </div>

          <div className="buttonWrapEvent">
            <button
              type="submit"
              style={{ borderColor: "#f17528", marginTop: "15px" }}
              disabled={isSubmitting}
            >
              신청하기
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
