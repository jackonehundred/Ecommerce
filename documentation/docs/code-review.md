### Code review – как это делаем мы

Главная цель code review— постоянно совершенствовать кодовую базу. Соответственно, если вы делаете обзор на код,
являющийся частью большого проекта, — подумайте в первую очередь не о сиюминутных решениях, а о том, как это повлияет на
весь проект в перспективе. Есть два аспекта, которые вам придётся отбалансировать.

### Дилемма обозревателя

С одной стороны, разработчику нужно предоставить возможность развиваться. Если вы честно скажете, что он наваял полный
бред, который не пойдёт в кодовую базу ни под каким видом, вы можете лишить его всякого желания работать над улучшением
кода.

В то же время нужно придерживаться стандартов качества кодовой базы проекта. Иногда кажется, что немного костылей и
просто не слишком хорошего кода — не так уж и страшно, но такие вещи имеют свойство накапливаться.

**Главное правило**

Необходимо найти баланс, позволив коллегам развиваться, и в то же время, не пожертвовав качеством кода.

Отсюда главное правило: даже если сам код, с вашей точки зрения, не идеален и не полностью соответствует стандартам,
принятым в нашем управлении, его нужно добавить в базу, если вы уверены, что он улучшит проект.
Естественно, из этого правила бывают исключения. Например, если предложенный код добавляет фичу, которая определённо не
нужна в проекте, от одобрения надо отказаться, как бы хорош ни был сам код.

### Наставничество

Оставляйте комментарии, делитесь своим опытом, в перспективе это улучшит код, который достанется вам от этого
разработчика в будущем. Однако следует разделить указания, обязательные к выполнению и общие рекомендации. В Google
советуют использовать для последних префикс «Nit:» (от слова «nitpicking», придирка). Не обязательно обозначать
рекомендации именно так, это просто общеупотребительный способ.

### Принципы

• Факты и данные важнее личного мнения и персональных предпочтений.
• Стиль кода должен соответствовать принятому в нашей команде. Если какой-то момент не оговорён — оставляйте его на
усмотрение коллеги.
• Архитектура кода должна соответствовать принципам, лежащим в основе проекта. Если есть несколько способов решить
задачу — выбирайте тот, который соответствует этим принципам. Если есть несколько равно эффективных вариантов — оставьте
выбор за автором кода.
• Можно попросить автора согласовать стиль кода с текущей кодовой базой, если это не ухудшит общего качества.

### Разрешение конфликтов

В случае разногласий с кодером постарайтесь найти вариант, устраивающий обоих. В первую очередь обратитесь к чётко
прописанным стандартам проекта. Возможно, будет лучше обсудить проблему при личной встрече или по видеосвязи.
Если это не помогает, стоит расширить дискуссию, вовлекая других членов команды – например, Тимлида. Не допускайте,
чтобы вашего решения приходилось ждать слишком долго из-за разногласий с коллегой.

### Что нужно проверить в рецензируемом коде

• Общая структура. Как код вписывается в ваш проект.
• Функциональность. Способен ли код полностью удовлетворить поставленные задачи.
• Удобство. Интуитивность UI и соответствие его общему стилю.
• Многопоточность. Рецензируемый код не должен конфликтовать с другими элементами кодовой базы при многопоточном
выполнении. То же касается и внутренних конфликтов кода.
• Простота. Код не должен быть слишком громоздким. Максимально упрощаем, но не в ущерб качеству и функциональности.
• Перспектива масштабирования. Возможно, в коде могут быть реализованы некоторые возможности, востребованные в будущем,
сообщите об этом разработчику.
• Наличие тестов (модульные, интеграционные и так далее). (обязательно для UI-Kit)
• Преемственность разработчиков. Все переменные, поля, функции, вообще все объекты и элементы в коде должны иметь ясные,
однозначные имена. Комментарии к коду ясно и чётко объясняют, зачем нужен каждый элемент. Обратите внимание, вопрос
«зачем это» важнее вопроса «что это».
• Соответствие стандартам. Код должен соответствовать стандарту стиля и быть должным образом документирован.

Проверьте каждую строчку кода, рассмотрите весь код в контексте проекта. Удостоверьтесь, что он способствует улучшению
кодовой базы. Ну и не забудьте поблагодарить разработчика за интересные решения.

### Как писать комментарии во время рецензирования

• Будьте благожелательны. Вы с разработчиком на одной стороне баррикад. Рецензируйте код, а не коллегу.
• Не будьте императивны, поясняйте свои рекомендации и указания. Это поможет разработчику лучше понять и выполнить их.
• Объясните, чего вы хотите, но не делайте работу за коллегу.
• Предложите разработчику попробовать упростить код, а если это невозможно — добавить подробные комментарии.

### Работа с возражениями

Коллеги могут быть не согласны с вашими рекомендациями. Возможно, в их возражениях есть резон? Если же вы уверены в
своей правоте, попробуйте донести свои аргументы до собеседника с помощью статей, например. Всегда оставайтесь корректны
и внимательно изучайте доводы разработчика. В случае, если консенсус найти так и не удалось, финальное слово стоит за
тимлидом проекта или ит-лидом управления, т.к. на них лежит основная ответственность за продукт.
Не поддавайтесь на уговоры из разряда «сабмить сейчас, доделаю потом». Возможно, доделает. Но, как правило, нет.
А вот общие жалобы на излишнюю придирчивость имеет смысл пропускать мимо ушей. Придерживайтесь стандартов, принятых в
вашем проекте, и требуйте того же от других.
