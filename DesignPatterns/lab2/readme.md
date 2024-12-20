# Лабораторна робота №2

## 1. Фабричний метод
- Визначили класи `DomesticSubscription`, `EducationalSubscription`, `PremiumSubscription`.
- Реалізували класи `WebSite`, `MobileApp`, `ManagerCall` для створення підписок.

[Посилання на код](src/Subscription/product.ts).
[Посилання на код](src/Subscription/creators.ts).

[Посилання на код головної функції](src/main.ts#L1-L18).

## 2. Абстрактна фабрика
- Створили фабрику для виробництва техніки з різними девайсами для різних брендів.

[Посилання на код](src/Devices/devices.ts).
[Посилання на код](src/Devices/factories.ts).

[Посилання на код головної функції](src/main.ts#L19-L45).

## 3. Одинак
- Реалізували клас `Authenticator` з можливістю створення лише одного екземпляра.

[Посилання на код](src/Authentificator/authentificator.ts).

[Посилання на код головної функції](src/main.ts#L46-L54).

## 4. Прототип
- Створили клас `Virus` та реалізували можливість клонування вірусів.

[Посилання на код](src/Virus/virus.ts).

[Посилання на код головної функції](src/main.ts#L55-L81).

## 5. Будівельник
- Розробили клас `HeroBuilder` для створення персонажів гри з різними ознаками.
- Створили клас `EnemyBuilder` для створення ворогів з додатковими можливостями.

[Посилання на код](src/Heroes/hero.ts).
[Посилання на код](src/Heroes/heroBuilder.ts).
[Посилання на код](src/Heroes/heroDirector.ts).

[Посилання на код головної функції](src/main.ts#L82-L135).
