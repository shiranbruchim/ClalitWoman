export default {
  steps: [
    {
      type: 'form',
      header: {
        icon: 'edit',
        title: 'שאלון הורים',
        subTitle: 'התפתחות לגיל 3 - 6 שנים',
      },
      components: [
        {
          type: 'textInput',
          placeholder: 'שם ממלא השאלון',
          defaultValue: 'יוגב בטיטו1',
          editable: true,
          rules: {
            required: 'חובה למלא את שם ממלא השאלון',
            minLength: {value: 2, message: 'יש למלא לפחות 2 תווים'},
          },
          id: 'question1',
        },
        {
          type: 'emailInput',
          placeholder: 'כתובת מייל',
          defaultValue: 'yogev@gmail.com ',
          editable: true,
          rules: {
            required: 'חובה למלא כתובת אימייל',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'כתובת אימייל שגויה',
            },
          },
          id: 'question2',
        },
        {
          type: 'dateInput',
          placeholder: 'שם ממלא השאלון',
          defaultValue: 'יוגב גרין3',
          editable: true,
          rules: {
            required: 'חובה לבחור תאריך',
          },
          id: 'question3',
        },
        {
          type: 'heading',
          defaultValue: 'פרטי הילד4',
          editable: true,
          rules: {
            required: 'חובה למלא שדה זה',
          },
          id: 'question4',
        },
        {
          type: 'checkbox',
          direction: 'horizontal/vertical',
          title: 'האם ילדכם איבד יכולות שכבר רכש ?',
          subTitle: 'ניתן לסמן יותר מאחד',
          id: 'question5',
          allowOther: true,
          options: [
            {
              value: 1,
              label: 'גורם חינוכי',
            },
            {
              value: 2,
              label: 'גורם ',
            },
            {
              value: 3,
              label: ' חינוכי',
            },
          ],
          editable: true,
          rules: {
            required: 'חובה למלא שדה זה',
          },
        },
        {
          type: 'textArea',
          title: 'תאר בקצרה את איתן ואת ביהת הפניה',
          placeholder: 'שם ממלא השאלון',
          defaultValue: 'אייתן גרין',
          editable: true,
          rules: {
            required: 'חובה למלא שדה זה',
            minLength: {value: 2, message: 'יש למלא לפחות 2 תווים'},
          },
          id: 'question6',
        },
        {
          type: 'radio',
          direction: 'horizontal',
          title: 'האם ילדכם איבד יכולות שכבר רכש ?',
          subTitle: 'יש לבחור לפחות אפשרות',
          allowOther: true,
          options: [
            {
              value: 1,
              label: 'לא',
              components: [
                {
                  type: 'dateInput',
                  placeholder: 'שם ממלא השאלון',
                  defaultValue: 'אייתן גרין',
                  editable: true,
                  rules: {
                    required: 'חובה לבחור תאריך',
                  },
                  id: 'option1',
                },
              ],
            },
            {
              value: 2,
              label: 'כן',
              components: [
                {
                  type: 'emailInput',
                  placeholder: 'כתובת מייל',
                  defaultValue: 'yogev@gmail.com ',
                  editable: true,
                  rules: {
                    required: 'חובה למלא כתובת אימייל',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'כתובת אימייל שגויה',
                    },
                  },
                  id: 'option2',
                },
              ],
            },
            {
              value: 3,
              label: 'לא רלבנטי לגיל',
            },
          ],
          editable: true,
          rules: {
            required: 'יש לבחור לפחות אפשרות אחת',
          },
          id: 'question555',
        },
        {
          type: 'comment',
          defaultValue: '',
          placeholder: 'תאר בקצרה את איתן ואת ביהת הפניה',
          rules: {
            required: 'חובה למלא שדה זה',
            minLength: {value: 2, message: 'יש למלא לפחות 2 תווים'},
          },
        },
        {
          type: 'numberBox',
          direction: 'horizontal/vertical',
          title: 'האם ילדכם איבד יכולות שכבר רכש ?',
          subTitle: 'ניתן לסמן יותר מאחד',
          id: 'question7',
          options: [
            {
              value: 1,
              label: 'רגוע',
            },
            {
              value: 2,
              label: '',
            },
            {
              value: 3,
              label: '',
            },
            {
              value: 4,
              label: '',
            },
            {
              value: 5,
              label: 'לא רגוע',
            },
          ],
          editable: true,
          rules: {
            required: 'חובה למלא שדה זה',
          },
        },
        {
          type: 'repeater',
          title: 'ילדים נוספים במשפחה',
          buttonLabel: 'הוסף ילד',
          id: 'question8',
          components: [
            {
              type: 'childBox',
              defaultValue: {
                name: 'יעל גרין',
                yearOfBirth: '2008',
                gender: 'm/f',
              },
            },
          ],
        },
        {
          id: 'question9',
          type: 'file',
          defaultValue: 'תאר בקצרה את איתן ואת ביהת הפניה',
        },
      ],
      button: {
        type: 'button',
        defaultValue: 'הבא',
      },
    },
    {
      type: 'form',
      // header: {...generalHeader, subTitle: 'ds'},
      header: {
        icon: 'edit',
        title: 'שאלון הורים',
        subTitle: 'התפתחות לגיל 3 - 6 שנים',
      },
      components: [
        {
          type: 'textInput',
          placeholder: 'שם ממלא השאלון',
          defaultValue: 'אייתן גרין',
          editable: true,
          rules: {
            required: 'חובה למלא שדה זה',
            minLength: {value: 2, message: 'יש למלא לפחות 2 תווים'},
          },
          id: 'question10',
        },
        {
          type: 'emailInput',
          placeholder: 'כתובת מייל',
          defaultValue: 'yogev@gmail.com ',
          editable: true,
          rules: {
            required: 'חובה למלא כתובת אימייל',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'כתובת אימייל שגויה',
            },
          },
          id: 'question11',
        },
        {
          type: 'dateInput',
          placeholder: 'שם ממלא השאלון',
          defaultValue: 'אייתן גרין',
          editable: true,
          rules: {
            required: 'חובה לבחור תאריך',
          },
          id: 'question12',
        },
        {
          type: 'heading',
          defaultValue: 'פרטי הילד',
          editable: true,
          rules: {
            required: 'חובה למלא שדה זה',
          },
          id: 'question13',
        },
        {
          type: 'radio',
          direction: 'horizontal/vertical',
          title: 'האם ילדכם איבד יכולות שכבר רכש ?',
          subTitle: 'ניתן לסמן יותר מאחד',
          allowOther: true,
          id: 'question14',
          options: [
            {
              value: 1,
              label: 'כן',
              components: [
                {
                  type: 'dateInput',
                  placeholder: 'שם ממלא השאלון',
                  defaultValue: 'אייתן גרין',
                  editable: true,
                  rules: {
                    required: 'חובה לבחור תאריך',
                  },
                  id: 'option1',
                },
              ],
            },
            {
              value: 2,
              label: 'לא',
              components: [
                {
                  type: 'emailInput',
                  placeholder: 'כתובת מייל',
                  defaultValue: 'yogev@gmail.com ',
                  editable: true,
                  rules: {
                    required: 'חובה למלא כתובת אימייל',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'כתובת אימייל שגויה',
                    },
                  },
                  id: 'option2',
                },
              ],
            },
            {
              value: 3,
              label: 'אולי',
            },
          ],
          editable: true,
          rules: {
            required: 'חובה למלא שדה זה',
          },
        },
        {
          type: 'checkbox',
          direction: 'horizontal/vertical',
          title: 'האם ילדכם איבד יכולות שכבר רכש ?',
          subTitle: 'ניתן לסמן יותר מאחד',
          id: 'question15',
          allowOther: true,
          options: [
            {
              value: 1,
              label: 'גורם חינוכי',
            },
            {
              value: 1,
              label: 'גורם חינוכי',
            },
            {
              value: 1,
              label: 'גורם חינוכי',
            },
          ],
          editable: true,
          rules: {
            required: 'חובה למלא שדה זה',
          },
        },
        {
          type: 'textArea',
          title: 'תאר בקצרה את איתן ואת ביהת הפניה',
          placeholder: 'שם ממלא השאלון',
          defaultValue: 'אייתן גרין',
          editable: true,
          rules: {
            required: 'חובה למלא שדה זה',
          },
          id: 'question66',
        },
        {
          type: 'comment',
          defaultValue: 'תאר בקצרה את איתן ואת ביהת הפניה',
          placeholder: 'תאר בקצרה את איתן ואת ביהת הפניה',
          rules: {
            required: 'חובה למלא שדה זה',
          },
        },
        {
          type: 'numberBox',
          direction: 'horizontal/vertical',
          title: 'האם ילדכם איבד יכולות שכבר רכש ?',
          subTitle: 'ניתן לסמן יותר מאחד',
          id: 'question16',
          options: [
            {
              value: 1,
              label: 'מעט',
            },
            {
              value: 2,
              label: '',
            },
            {
              value: 3,
              label: 'גורם חינוכי',
            },
          ],
          editable: true,
          rules: {
            required: 'חובה למלא שדה זה',
          },
        },
        {
          type: 'repeater',
          title: 'ילדים נוספים במשפחה',
          buttonLabel: 'הוסף ילד',
          id: 'question17',
          components: [
            {
              type: 'childBox',
              defaultValue: {
                name: 'יעל גרין',
                yearOfBirth: '2008',
                gender: 'm/f',
              },
            },
          ],
        },
        {
          id: 'question18',
          type: 'file',
          defaultValue: 'תאר בקצרה את איתן ואת ביהת הפניה',
        },
      ],
      button: {
        type: 'button',
        defaultValue: 'הבא',
      },
    },
    {
      type: 'form',
      // header: {...generalHeader, subTitle: 'ds'},
      header: {
        icon: 'edit',
        title: 'שאלון הורים',
        subTitle: 'התפתחות לגיל 3 - 6 שנים',
      },
      components: [
        {
          type: 'textInput',
          placeholder: 'שם ממלא השאלון',
          defaultValue: 'יוגב בטיטו1',
          editable: true,
          rules: {
            required: 'חובה למלא שדה זה',
            minLength: {value: 2, message: 'יש למלא לפחות 2 תווים'},
          },
          id: 'question19',
        },
        {
          type: 'emailInput',
          placeholder: 'כתובת מייל',
          defaultValue: 'yogev@gmail.com ',
          editable: true,
          rules: {
            required: 'חובה למלא כתובת אימייל',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'כתובת אימייל שגויה',
            },
          },
          id: 'question20',
        },
        {
          type: 'dateInput',
          placeholder: 'שם ממלא השאלון',
          defaultValue: 'יוגב גרין3',
          editable: true,
          rules: {
            required: 'חובה לבחור תאריך',
          },
          id: 'question21',
        },
        {
          type: 'heading',
          defaultValue: 'פרטי הילד4',
          editable: true,
          rules: {
            required: 'חובה למלא שדה זה',
            minLength: {value: 2, message: 'יש למלא לפחות 2 תווים'},
          },
          id: 'question22',
        },
        {
          type: 'radio',
          direction: 'horizontal/vertical',
          title: 'האם ילדכם איבד יכולות שכבר רכש ?',
          subTitle: 'ניתן לסמן יותר מאחד',
          allowOther: true,
          options: [
            {
              value: 1,
              label: 'לא',
              components: [
                {
                  type: 'dateInput',
                  placeholder: 'שם ממלא השאלון',
                  defaultValue: 'אייתן גרין',
                  editable: true,
                  rules: {
                    required: 'חובה לבחור תאריך',
                  },
                  id: 'question23',
                },
              ],
            },
            {
              value: 2,
              label: 'כן',
              components: [
                {
                  type: 'emailInput',
                  placeholder: 'כתובת מייל',
                  defaultValue: 'yogev@gmail.com ',
                  editable: true,
                  rules: {
                    required: 'חובה למלא כתובת אימייל',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'כתובת אימייל שגויה',
                    },
                  },
                  id: 'question24',
                },
              ],
            },
            {
              value: 3,
              label: 'לא רלבנטי לגיל',
            },
          ],
          editable: true,
          rules: {
            required: 'חובה למלא שדה זה',
          },
        },
        {
          type: 'checkbox',
          direction: 'horizontal/vertical',
          title: 'האם ילדכם איבד יכולות שכבר רכש ?',
          subTitle: 'ניתן לסמן יותר מאחד',
          rules: {
            required: 'חובה למלא שדה זה',
          },
          id: 'question25',
          allowOther: true,
          options: [
            {
              value: 1,
              label: 'גורם חינוכי',
            },
            {
              value: 1,
              label: 'גורם ',
            },
            {
              value: 1,
              label: ' חינוכי',
            },
          ],
          editable: true,
        },
        {
          type: 'textArea',
          title: 'תאר בקצרה את איתן ואת ביהת הפניה',
          placeholder: 'שם ממלא השאלון',
          defaultValue: 'אייתן גרין',
          editable: true,
          rules: {
            required: 'חובה למלא שדה זה',
          },
          id: 'question26',
        },
        {
          type: 'comment',
          defaultValue: '',
          placeholder: 'תאר בקצרה את איתן ואת ביהת הפניה',
          rules: {
            required: 'חובה למלא שדה זה',
          },
        },
        {
          type: 'numberBox',
          direction: 'horizontal/vertical',
          title: 'האם ילדכם איבד יכולות שכבר רכש ?',
          subTitle: 'ניתן לסמן יותר מאחד',
          id: 'question27',
          options: [
            {
              value: 1,
              label: 'מעט',
            },
            {
              value: 2,
              label: '',
            },
            {
              value: 3,
              label: 'גורם חינוכי',
            },
          ],
          editable: true,
          rules: {
            required: 'חובה למלא שדה זה',
          },
        },
        {
          type: 'repeater',
          title: 'ילדים נוספים במשפחה',
          buttonLabel: 'הוסף ילד',
          id: 'question28',
          components: [
            {
              type: 'childBox',
              defaultValue: {
                name: 'יעל גרין',
                yearOfBirth: '2008',
                gender: 'm/f',
              },
            },
          ],
        },
        {
          id: 'question29',
          type: 'file',
          defaultValue: 'תאר בקצרה את סיבת הפניה',
        },
      ],
      button: {
        type: 'button',
        defaultValue: 'הבא',
      },
    },
    {
      type: 'form',
      header: {
        icon: 'edit',
        title: 'שאלון הורים',
        subTitle: 'התפתחות לגיל 3 - 6 שנים',
      },
      components: [
        {
          type: 'thankYouPage',
          title: 'השאלון נשלח בהצלחה',
          subTitle: 'עוד כמה ימים תקבלו תשובה',
          defaultValue:
            ' ביינתיים תעקבו אחרי הסטטוס ותתרגלו את התרגילים היומיומים',
        },
      ],
    },
  ],
};
